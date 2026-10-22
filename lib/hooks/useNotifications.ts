import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notificationsApi } from "@/lib/api/notifications";

export function useNotifications() {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["notifications"],
    queryFn: notificationsApi.list,
  });
  const refresh = () => queryClient.invalidateQueries({ queryKey: ["notifications"] });
  const markRead = useMutation({ mutationFn: notificationsApi.markRead, onSuccess: refresh });
  const markAllRead = useMutation({ mutationFn: notificationsApi.markAllRead, onSuccess: refresh });
  return { ...query, markRead, markAllRead };
}
