import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import EyeSvg from '@/shared/assets/icons/eye.svg';
import CalendarSvg from '@/shared/assets/icons/calendar.svg';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { RoutePath } from '@/shared/config/routeConfig/RouteConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleView, ArticleBlockType } from '../../model/consts/articleConsts';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Icon, IconType } from '@/shared/ui/Icon/Icon';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const { t } = useTranslation();

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <AppLink to={RoutePath.article_details + article.id} target={target}>
                    <Card className={cls.card}>
                        <img src={article.img} alt={article.title} className={cls.img} />
                        <VStack className={cls.header} gap="12">
                            <Text title={article.title} size={TextSize.S} className={cls.title} />
                            <VStack gap="8">
                                <HStack gap="8">
                                    <Icon Svg={CalendarSvg} theme={IconType.SECOND} />
                                    <Text text={article.createdAt} className={cls.date} />
                                </HStack>
                                <HStack gap="8">
                                    <Icon Svg={EyeSvg} theme={IconType.SECOND} />
                                    <Text text={String(article.views)} className={cls.views} />
                                </HStack>
                            </VStack>
                            <Card theme={CardTheme.TAG}>
                                {article.type.join(', ')}
                            </Card>
                        </VStack>
                        {textBlock && (
                            <ArticleTextBlockComponent
                                title={false}
                                block={textBlock}
                                className={cls.textBlock}
                            />
                        )}
                    </Card>
                </AppLink>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <EyeSvg width={20} height={20} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
