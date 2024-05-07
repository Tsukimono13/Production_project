import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconType {
    NORMAL = 'normal',
    SECOND = 'second',
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    theme?: IconType;
}

export const Icon = memo((props: IconProps) => {
    const {
        Svg,
        className,
        inverted,
        theme = IconType.NORMAL,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        />
    );
});
