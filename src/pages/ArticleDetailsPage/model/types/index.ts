import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticlePageRecommendationsSchema } from './articlePageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticlePageRecommendationsSchema;
}
