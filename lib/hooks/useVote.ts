import { useMutation, useQueryClient } from "@tanstack/react-query";
import { votesApi } from "@/lib/api/polls";

interface CastVoteArgs {
  slug: string;
  payload: {
    contestant_id: string;
    quantity: number;
    email?: string;
    payment_ref?: string;
  };
}

export function useVote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ slug, payload }: CastVoteArgs) => votesApi.cast(slug, payload),
    onSuccess: (_, variables) => {
      // Invalidate the specific poll to refetch new vote counts
      queryClient.invalidateQueries({ queryKey: ["poll", variables.slug] });
      // Also invalidate polls list to keep stats updated there
      queryClient.invalidateQueries({ queryKey: ["polls"] });
    },
  });
}
