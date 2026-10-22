import { apiClient } from "./client";
import type { User, AuthTokens } from "@/lib/types";

interface LoginPayload     { email: string; password: string }
interface RegisterPayload  { name: string; email: string; password: string; organization?: string }
interface ResetPayload     { email: string }
interface ConfirmPayload   { email: string; code: string; password: string }
interface RefreshPayload   { refresh: string }
interface OrganizerRequestPayload { business_name: string; bio?: string }
export interface OrganizerRequest {
  id: string;
  name: string;
  email: string;
  business_name: string;
  bio: string;
  is_approved: boolean;
  requested_at: string;
}

export type OrganizerRequestStatus = OrganizerRequest | { status: "not_requested" };

interface LoginResponse    { user: User; tokens: AuthTokens }
interface RegisterResponse { user: User; tokens: AuthTokens }
interface MessageResponse  { detail: string }

export const authApi = {
  /** POST /auth/login/ */
  login: (payload: LoginPayload) =>
    apiClient.post<LoginResponse, LoginPayload>("/auth/login/", payload, { public: true }),

  /** POST /auth/register/ */
  register: (payload: RegisterPayload) =>
    apiClient.post<RegisterResponse, RegisterPayload>("/auth/register/", payload, { public: true }),

  /** POST /auth/logout/ — invalidates refresh token */
  logout: (refresh: string) =>
    apiClient.post<MessageResponse, { refresh: string }>("/auth/logout/", { refresh }),

  /** POST /auth/token/refresh/ */
  refreshToken: (payload: RefreshPayload) =>
    apiClient.post<AuthTokens, RefreshPayload>("/auth/token/refresh/", payload, { public: true }),

  /** POST /auth/password/reset/ */
  requestPasswordReset: (payload: ResetPayload) =>
    apiClient.post<MessageResponse, ResetPayload>("/auth/password/reset/", payload, { public: true }),

  /** POST /auth/password/reset/confirm/ */
  confirmPasswordReset: (payload: ConfirmPayload) =>
    apiClient.post<MessageResponse, ConfirmPayload>("/auth/password/reset/confirm/", payload, { public: true }),

  /** GET /auth/me/ */
  me: () => apiClient.get<User>("/auth/me/"),

  /** PATCH /auth/me/ */
  updateProfile: (data: Partial<User>) =>
    apiClient.patch<User, Partial<User>>("/auth/me/", data),

  requestOrganizerAccess: (payload: OrganizerRequestPayload) =>
    apiClient.post<{ status?: string; is_approved?: boolean; message?: string }, OrganizerRequestPayload>("/auth/organizer/request/", payload),

  organizerRequestStatus: () => apiClient.get<OrganizerRequestStatus>("/auth/organizer/request/"),

  organizerRequests: () => apiClient.get<OrganizerRequest[]>("/auth/admin/organizers/"),
  approveOrganizer: (id: string) => apiClient.post<{ success: boolean; message: string }, Record<string, never>>(`/auth/admin/organizers/${id}/approve/`, {}),
  rejectOrganizer: (id: string) => apiClient.post<{ success: boolean; message: string }, Record<string, never>>(`/auth/admin/organizers/${id}/reject/`, {}),
};
