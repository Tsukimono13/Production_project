import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticlePageRecommendationsSchema } from './ArticlePageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticlePageRecommendationsSchema;
}
