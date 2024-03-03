import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  round?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, round, size = ButtonSize.M, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.round]: round,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
