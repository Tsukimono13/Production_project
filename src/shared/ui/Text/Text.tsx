import { CSSProperties, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    marginT?: string | number;
    size?: TextSize;

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.XS]: 'h5',
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        marginT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    const styles: CSSProperties = {
        marginTop: marginT,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text}
                    style={styles}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
