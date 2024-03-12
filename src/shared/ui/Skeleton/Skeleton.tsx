import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        border,
        height,
        width,
    } = props;

    const mods: Mods = {
    };

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={classNames(cls.Skeleton, mods, [className])} style={styles} />
    );
});
