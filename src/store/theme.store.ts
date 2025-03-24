import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { THEME, type Theme } from '../enums';

type ThemeState = {
  theme: Theme;
  setTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: THEME.light,
      setTheme: () => set((state) => ({
        theme: state.theme === THEME.light ? THEME.dark : THEME.light,
      })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
