import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const userData = useSelector(getUserData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>

    );
});
