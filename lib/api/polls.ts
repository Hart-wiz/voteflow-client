import { apiClient } from "./client";
import type { Poll, PollFilters, PaginatedResponse, Contestant } from "@/lib/types";

// ─── Polls ────────────────────────────────────────────────────

export const pollsApi = {
  /** GET /polls/?search=&category=&status= */
  list: (filters?: PollFilters) => {
    const params = new URLSearchParams();
    if (filters?.search)   params.set("search",   filters.search);
    if (filters?.category) params.set("category", filters.category);
    if (filters?.status && filters.status !== "all")
      params.set("status", filters.status);
    if (filters?.sortBy)   params.set("ordering", filters.sortBy);

    const query = params.toString();
    return apiClient.get<PaginatedResponse<Poll>>(`/polls/${query ? `?${query}` : ""}`, { public: true });
  },

  /** GET /polls/:slug/ */
  get: (slug: string) =>
    apiClient.get<Poll>(`/polls/${slug}/`, { public: true }),

  /** POST /polls/ */
  create: (data: Partial<Poll>) =>
    apiClient.post<Poll, Partial<Poll>>("/polls/", data),

  /** PATCH /polls/:slug/ */
  update: (slug: string, data: Partial<Poll>) =>
    apiClient.patch<Poll, Partial<Poll>>(`/polls/${slug}/`, data),

  /** DELETE /polls/:slug/ */
  delete: (slug: string) =>
    apiClient.delete<void>(`/polls/${slug}/`),
};

// ─── Votes ────────────────────────────────────────────────────

interface CastVotePayload {
  contestant_id: string;
  quantity: number;
  email?: string;       // for paid votes / receipt
  payment_ref?: string; // Paystack reference
}

interface CastVoteResponse {
  success: boolean;
  message: string;
  transaction_ref?: string;
}

export const votesApi = {
  /** POST /polls/:slug/vote/ */
  cast: (slug: string, payload: CastVotePayload) =>
    apiClient.post<CastVoteResponse, CastVotePayload>(`/polls/${slug}/vote/`, payload, { public: true }),

  /** GET /polls/:slug/results/ */
  results: (slug: string) =>
    apiClient.get<Contestant[]>(`/polls/${slug}/results/`, { public: true }),
};
