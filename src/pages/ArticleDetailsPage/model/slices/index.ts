import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articlePageRecommendationsReducer } from './articlePageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducers =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articlePageRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
