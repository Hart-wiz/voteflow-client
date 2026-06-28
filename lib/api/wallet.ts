import { apiClient } from "./client";
import type { WalletData, Transaction } from "@/lib/types";

interface WithdrawPayload {
  amount: number;
  bank_code?: string;
  account_number?: string;
}

interface WithdrawResponse {
  success: boolean;
  reference: string;
  message: string;
}

export const walletApi = {
  /** GET /wallet/ */
  get: () => apiClient.get<WalletData>("/wallet/"),

  /** GET /wallet/transactions/ */
  transactions: (page = 1) =>
    apiClient.get<{ results: Transaction[]; count: number }>(`/wallet/transactions/?page=${page}`),

  /** POST /wallet/withdraw/ */
  withdraw: (payload: WithdrawPayload) =>
    apiClient.post<WithdrawResponse, WithdrawPayload>("/wallet/withdraw/", payload),
};
