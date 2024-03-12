import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { id, className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton width={200} height={200} border="50%" className={cls.avatar} />
                <Skeleton width={300} height={32} border="7px" />
                <Skeleton width={600} height={24} border="7px" className={cls.subtitle} />
                <div className={cls.content}>
                    <Skeleton width="100%" height={200} border="12px" />
                    <Skeleton width="100%" height={200} border="12px" />
                </div>
            </div>
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
            <div>ARTICLE DETAILSr</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
