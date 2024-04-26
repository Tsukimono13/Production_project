import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { VStack } from '@/shared/ui/Stack';
import { TextSize, Text } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack data-testid="" gap="16" className={classNames('', {}, [className])}>
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
