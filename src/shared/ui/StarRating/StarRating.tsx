import { memo, useState } from 'react';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        selectedStars = 0,
        size = 30,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div>
            {stars.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [
                        currentStarsCount >= starNumber ? cls.hovered : cls.normal,
                    ])}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    );
});
