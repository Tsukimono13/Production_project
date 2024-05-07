import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import MainSvg from '@/shared/assets/icons/main.svg';
import AboutSvg from '@/shared/assets/icons/about.svg';
import ProfileSvg from '@/shared/assets/icons/profile.svg';
import ArticlesSvg from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainSvg,
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: AboutSvg,
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileSvg,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesSvg,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
