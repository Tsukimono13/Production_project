import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const {
        Svg, className, ...otherProps
    } = props;
    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
