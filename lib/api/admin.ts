import { apiClient, normalizePaginatedResponse } from "./client";
import type { PaginatedResponse } from "@/lib/types";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ORGANIZER" | "ADMIN";
  is_active: boolean;
  is_email_verified: boolean;
  created_at: string;
}

export interface AdminAuditLog {
  id: string;
  action_type: string;
  resource_type: string;
  resource_id: string;
  user_id: string | null;
  timestamp: string;
  metadata: Record<string, unknown>;
}

type Page<T> = Partial<PaginatedResponse<T>> & { items?: T[] };

export const adminApi = {
  users: (role?: AdminUser["role"]) => {
    const params = new URLSearchParams();
    if (role) params.set("role", role);
    const query = params.toString();
    return apiClient
      .get<Page<AdminUser>>(`/admin/users/${query ? `?${query}` : ""}`)
      .then(normalizePaginatedResponse);
  },

  auditLogs: () =>
    apiClient
      .get<Page<AdminAuditLog>>("/admin/audit-logs/")
      .then(normalizePaginatedResponse),
};
