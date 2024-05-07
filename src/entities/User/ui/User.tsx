import React from 'react';
import { useTranslation } from 'react-i18next';

export const User = () => {
    const { t } = useTranslation();
    return <div>{t('Пользователь')}</div>;
};
