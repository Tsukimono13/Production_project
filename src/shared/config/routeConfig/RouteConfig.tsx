import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlePage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutersProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',

  // last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.NOT_FOUND]: '*',
    [AppRouters.PROFILE]: '/profile/', // + :id
    [AppRouters.ARTICLES]: '/articles',
    [AppRouters.ARTICLE_DETAILS]: '/articles/', // + :id
};

export const routeConfig: Record<AppRouters, AppRoutersProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRouters.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRouters.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRouters.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
