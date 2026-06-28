import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { pollsApi } from "@/lib/api/polls";
import type { Poll } from "@/lib/types";

export function usePoll(slug: string) {
  return useQuery({
    queryKey: ["poll", slug],
    queryFn: () => pollsApi.get(slug),
    enabled: !!slug,
  });
}

export function useUpdatePoll() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: Partial<Poll> }) => pollsApi.update(slug, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["poll", variables.slug] });
      queryClient.invalidateQueries({ queryKey: ["polls"] });
    },
  });
}

export function useDeletePoll() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (slug: string) => pollsApi.delete(slug),
    onSuccess: (_, slug) => {
      queryClient.removeQueries({ queryKey: ["poll", slug] });
      queryClient.invalidateQueries({ queryKey: ["polls"] });
    },
  });
}
