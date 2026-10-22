import { apiClient } from "./client";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "vote" | "payment" | "warning" | "info";
}

export const notificationsApi = {
  list: () => apiClient.get<NotificationItem[]>("/notifications/"),
  markRead: (id: string) => apiClient.post<{ success: boolean }, Record<string, never>>(`/notifications/${id}/read/`, {}),
  markAllRead: () => apiClient.post<{ success: boolean }, Record<string, never>>("/notifications/read-all/", {}),
};
