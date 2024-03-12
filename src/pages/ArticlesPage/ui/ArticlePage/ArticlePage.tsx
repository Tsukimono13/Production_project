import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = (props: ArticlePageProps) => {
    const {className} = props;
    const { t } = useTranslation('article');

    return (
        <div>
            {t('ARTICLe')}
        </div>
    );
};

export default memo(ArticlePage);