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

  const resolvedHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  // Attach JWT from localStorage if available
  if (!isPublic && typeof window !== "undefined") {
    const token = localStorage.getItem("voteflow_access_token");
    if (token) resolvedHeaders["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: resolvedHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
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
