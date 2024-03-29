import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeSvg from '@/shared/assets/icons/eye.svg';
import CalendarSvg from '@/shared/assets/icons/calendar.svg';
import { HStack, VStack } from '@/shared/ui/Stack';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/consts/articleConsts';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { id, className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton width={200} height={200} border="50%" className={cls.avatar} />
                <Skeleton width={300} height={32} border="7px" />
                <Skeleton width={600} height={24} border="7px" />
                <VStack max gap="16">
                    <Skeleton width="100%" height={200} border="12px" />
                    <Skeleton width="100%" height={200} border="12px" />
                </VStack>
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <Avatar
                    size={150}
                    src={article?.img}
                    className={cls.avatar}
                />
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    marginT={15}
                    size={TextSize.L}
                />
                <HStack gap="16">
                    <HStack gap="8">
                        <EyeSvg width={24} height={24} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <CalendarSvg width={24} height={24} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </HStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
