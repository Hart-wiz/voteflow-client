import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { pollsApi } from "@/lib/api/polls";
import type { PollFilters, Poll } from "@/lib/types";

export function usePolls(filters?: PollFilters) {
  return useQuery({
    queryKey: ["polls", filters],
    queryFn: () => pollsApi.list(filters),
  });
}

export function useCreatePoll() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<Poll>) => pollsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["polls"] });
    },
  });
}
