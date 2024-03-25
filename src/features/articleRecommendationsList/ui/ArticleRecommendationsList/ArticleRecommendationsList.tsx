import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="16" className={classNames('', {}, [className])}>
            <Text
                title={t('Рекомендуем')}
                size={TextSize.L}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
