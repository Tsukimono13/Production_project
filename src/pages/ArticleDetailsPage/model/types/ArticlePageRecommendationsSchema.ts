import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { Comment } from '@/entities/Comment';

export interface ArticlePageRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
