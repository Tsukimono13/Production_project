export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

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
    [AppRouters.ARTICLE_CREATE]: '/articles/new',
    [AppRouters.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRouters.ADMIN_PANEL]: '/admin',
    [AppRouters.FORBIDDEN]: '/forbidden',
};
