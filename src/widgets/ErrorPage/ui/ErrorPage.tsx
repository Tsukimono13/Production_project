import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Page } from '@/widgets/Page/Page';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <Page
            className={classNames(cls.ErrorPage, { }, [className])}
        >
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                onClick={reloadPage}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {t('Обновить страницу')}
            </Button>
        </Page>
    );
};
