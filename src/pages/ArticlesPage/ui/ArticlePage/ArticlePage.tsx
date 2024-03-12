import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('ARTICLe')}
        </div>
    );
};

export default memo(ArticlePage);
