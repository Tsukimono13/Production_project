import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGAElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { Svg, className } = props;
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});
