import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
 PRIMARY = 'primary',
 ERROR = 'error',
 INVERTED = 'inverted'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  marginT?: string | number;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        marginT,
        size = TextSize.M,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    const styles:CSSProperties = {
        marginTop: marginT,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text} style={styles}>{text}</p>}
        </div>
    );
});
