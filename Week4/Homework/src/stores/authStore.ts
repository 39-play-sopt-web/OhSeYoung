import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Part } from '../types/member';

interface AuthState {
  authorizationCode: string | null;
  part: Part | null;
  login: (authorizationCode: string, part: Part) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authorizationCode: null,
      part: null,
      login: (authorizationCode, part) => set({ authorizationCode, part }),
      logout: () => set({ authorizationCode: null, part: null }),
    }),
    { name: 'sopt-auth' },
  ),
);
