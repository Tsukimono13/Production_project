import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';

import { getCanEditArticle } from '../../model/selectors/article';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        const userData = useSelector(getUserData);
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditArticle);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button theme={ThemeButton.OUTLINE} onClick={onEditArticle}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);
