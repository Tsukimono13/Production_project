import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';
import NotFound from '@/shared/assets/images/not_found_page.png';
import { VStack } from '@/shared/ui/Stack';
import { TextAlign, TextSize, Text } from '@/shared/ui/Text';

interface NotFoundPageProps {
    className?: string;
  }

const NotFoundPage = ({ className } : NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])} data-testid="NotFoundPage">
            <VStack max justify="center" align="center">
                <img src={NotFound} alt={t('Грустный кот')} />
                <Text
                    title={t('Страница не найдена')}
                    text={t('Она удалена или не существовала вовсе.')}
                    align={TextAlign.CENTER}
                    size={TextSize.XL}
                    marginT={44}
                />
                <Text text={t('Нам очень жаль:(((')} size={TextSize.XL} />
            </VStack>
        </Page>
    );
};

export default NotFoundPage;
