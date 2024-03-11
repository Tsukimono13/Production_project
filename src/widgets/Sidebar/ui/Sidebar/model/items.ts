import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import MainSvg from 'shared/assets/icons/main.svg';
import AboutSvg from 'shared/assets/icons/about.svg';
import ProfileSvg from 'shared/assets/icons/profile.svg';
import ArticlesSvg from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGAElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainSvg,
        text: 'Главная',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileSvg,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticlesSvg,
        text: 'Статьи',
        authOnly: true,
    },
    {
        path: RoutePath.about,
        Icon: AboutSvg,
        text: 'О сайте',
    },
];
