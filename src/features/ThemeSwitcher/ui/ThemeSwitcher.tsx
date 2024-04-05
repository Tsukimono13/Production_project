import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/shared/const/theme';
import DarkIcon from '@/shared/assets/icons/dark.svg';
import LightIcon from '@/shared/assets/icons/light.svg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width={32} height={32} />
            ) : (
                <LightIcon width={32} height={32} />
            )}
        </Button>
    );
});
