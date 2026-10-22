"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/lib/api/auth";
import { useAuthStore } from "@/lib/stores/auth";

/** Refresh the persisted role from the authenticated backend session. */
export function useCurrentUser() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const updateUser = useAuthStore((state) => state.updateUser);
  const query = useQuery({
    queryKey: ["auth", "me"],
    queryFn: authApi.me,
    enabled: isAuthenticated,
    staleTime: 0,
  });

  useEffect(() => {
    if (query.data) updateUser(query.data);
  }, [query.data, updateUser]);

  return query;
}
