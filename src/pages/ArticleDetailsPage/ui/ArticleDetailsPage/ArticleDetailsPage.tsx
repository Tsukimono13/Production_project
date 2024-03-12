import { ArticleDetails } from 'entities/Article';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Input } from 'shared/ui/Input/Input';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
