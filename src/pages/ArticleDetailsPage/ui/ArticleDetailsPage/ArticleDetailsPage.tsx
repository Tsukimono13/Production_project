import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {className} = props;
    const { t } = useTranslation('article');

    return (
        <div>
            {t('ARTICLE DETAILS')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
