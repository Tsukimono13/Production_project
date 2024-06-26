import { createContext } from 'react';
import { Theme } from '../../const/theme';

export interface ThemeContextPops {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextPops>({});
