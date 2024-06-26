import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListSvg from '@/shared/assets/icons/list.svg';
import BlocksSvg from '@/shared/assets/icons/block.svg';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: BlocksSvg,
    },
    {
        view: ArticleView.BIG,
        icon: ListSvg,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(cls.svg, {
                            [cls.selected]: viewType.view === view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
