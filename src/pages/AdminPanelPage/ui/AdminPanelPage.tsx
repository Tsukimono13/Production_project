import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string;
  }

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page>
            {t('Панель админа')}
        </Page>
    );
};

export default memo(AdminPanelPage);
