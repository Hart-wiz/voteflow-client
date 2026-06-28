import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { walletApi } from "@/lib/api/wallet";

export function useWallet() {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: () => walletApi.get(),
  });
}

export function useTransactions(page = 1) {
  return useQuery({
    queryKey: ["transactions", page],
    queryFn: () => walletApi.transactions(page),
  });
}

export function useWithdraw() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { amount: number; bank_code?: string; account_number?: string }) => walletApi.withdraw(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallet"] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
