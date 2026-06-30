import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authApi } from "@/lib/api/auth";
import type { User, AuthTokens } from "@/lib/types";

// Helper to sync token to a cookie for Next.js Middleware
const setCookie = (token: string) => {
  if (typeof document !== "undefined") {
    // Set cookie to expire in 7 days
    document.cookie = `voteflow-token=${token}; path=/; max-age=604800; SameSite=Lax`;
  }
};

const deleteCookie = () => {
  if (typeof document !== "undefined") {
    document.cookie = `voteflow-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};

interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  
  // Actions
  login: (payload: Parameters<typeof authApi.login>[0]) => Promise<void>;
  register: (payload: Parameters<typeof authApi.register>[0]) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => void;
  setTokens: (tokens: AuthTokens) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      tokens: null,
      isAuthenticated: false,

      login: async (payload) => {
        const response = await authApi.login(payload);
        setCookie(response.tokens.access);
        set({
          user: response.user,
          tokens: response.tokens,
          isAuthenticated: true,
        });
      },

      register: async (payload) => {
        const response = await authApi.register(payload);
        setCookie(response.tokens.access);
        set({
          user: response.user,
          tokens: response.tokens,
          isAuthenticated: true,
        });
      },

      logout: async () => {
        const { tokens } = get();
        if (tokens?.refresh) {
          try {
            await authApi.logout(tokens.refresh);
          } catch (e) {
            console.error("Logout failed on server, proceeding to clear local state", e);
          }
        }
        deleteCookie();
        set({ user: null, tokens: null, isAuthenticated: false });
      },

      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        }));
      },

      setTokens: (tokens) => {
        setCookie(tokens.access);
        set({ tokens, isAuthenticated: true });
      },
    }),
    {
      name: "voteflow-auth", // unique name for localStorage key
    }
  )
);
