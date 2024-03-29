import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  BRIGHT = 'app_bright_theme',
}

export interface ThemeContextPops {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextPops>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
