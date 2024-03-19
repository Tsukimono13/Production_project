import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView, ArticleType } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?:boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    search: string;
    sort: ArticleSortField;
    type: ArticleType;

    _inited: boolean;
}
