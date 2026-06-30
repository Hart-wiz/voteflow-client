/**
 * lib/api/client.ts
 *
 * Base HTTP client for all VoteFlow API calls.
 * Swap BASE_URL to point at the Django backend.
 * All requests automatically include the auth token
 * from localStorage when present.
 */

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
  /** Skip the Authorization header — for public endpoints */
  public?: boolean;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<TResponse, TBody = unknown>(
  path: string,
  options: RequestOptions<TBody> = {}
): Promise<TResponse> {
  const { method = "GET", body, headers = {}, public: isPublic = false } = options;

  const isFormData = body instanceof FormData;
  const resolvedHeaders: Record<string, string> = {
    ...headers,
  };
  
  // Only set default Content-Type to application/json if we are not sending FormData
  if (!isFormData && !resolvedHeaders["Content-Type"]) {
    resolvedHeaders["Content-Type"] = "application/json";
  }

  // Attach JWT from localStorage if available
  if (!isPublic && typeof window !== "undefined") {
    try {
      const authStr = localStorage.getItem("voteflow-auth");
      if (authStr) {
        const authData = JSON.parse(authStr);
        const token = authData?.state?.tokens?.access;
        if (token) resolvedHeaders["Authorization"] = `Bearer ${token}`;
      }
    } catch (e) {
      console.error("Failed to parse auth token", e);
    }
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: resolvedHeaders,
    body: isFormData ? (body as unknown as BodyInit) : (body ? JSON.stringify(body) : undefined),
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    // Handle 401 Unauthorized by attempting to refresh the token
    if (res.status === 401 && !isPublic && typeof window !== "undefined") {
      try {
        const authStr = localStorage.getItem("voteflow-auth");
        const authData = authStr ? JSON.parse(authStr) : null;
        const refreshToken = authData?.state?.tokens?.refresh;

        if (refreshToken) {
          // Attempt refresh directly via fetch to avoid circular logic
          const refreshRes = await fetch(`${BASE_URL}/auth/token/refresh/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh: refreshToken }),
          });

          if (refreshRes.ok) {
            const newTokens = await refreshRes.json();
            
            // Update local storage so Zustand picks it up on next load/action
            authData.state.tokens = newTokens;
            localStorage.setItem("voteflow-auth", JSON.stringify(authData));
            
            // Sync cookie for Next.js middleware
            document.cookie = `voteflow-token=${newTokens.access}; path=/; max-age=604800; SameSite=Lax`;

            // Retry original request with new token
            resolvedHeaders["Authorization"] = `Bearer ${newTokens.access}`;
            const retryRes = await fetch(`${BASE_URL}${path}`, {
              method,
              headers: resolvedHeaders,
              body: body ? JSON.stringify(body) : undefined,
            });
            
            if (retryRes.ok) {
              return (await retryRes.json()) as TResponse;
            }
          }
        }
      } catch (e) {
        console.error("Token refresh failed", e);
      }
      
      // If refresh failed or wasn't possible, force logout via event or redirect
      // (The store's logout logic or a global event would be ideal here)
      // window.location.href = "/login";
    }

    throw new ApiError(
      res.status,
      json?.detail ?? json?.message ?? res.statusText,
      json
    );
  }

  return json as TResponse;
}

export const apiClient = {
  get:    <T>(path: string, opts?: Omit<RequestOptions, "method" | "body">) =>
            request<T>(path, { ...opts, method: "GET" }),
  post:   <T, B = unknown>(path: string, body: B, opts?: Omit<RequestOptions<B>, "method">) =>
            request<T, B>(path, { ...opts, method: "POST", body }),
  put:    <T, B = unknown>(path: string, body: B, opts?: Omit<RequestOptions<B>, "method">) =>
            request<T, B>(path, { ...opts, method: "PUT", body }),
  patch:  <T, B = unknown>(path: string, body: B, opts?: Omit<RequestOptions<B>, "method">) =>
            request<T, B>(path, { ...opts, method: "PATCH", body }),
  delete: <T>(path: string, opts?: Omit<RequestOptions, "method" | "body">) =>
            request<T>(path, { ...opts, method: "DELETE" }),
};
