import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserData } from '@/entities/User';
import { getRouteArticleCreate, getRouteMain } from '@/shared/const/router';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import LogoSvg from '@/shared/assets/icons/logo.svg';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <AppLink to={getRouteMain()}>
                    <Icon Svg={LogoSvg} className={cls.logo} />
                </AppLink>
                <HStack gap="12" className={cls.actions}>
                    <AppLink
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.BORDER}
                        className={cls.createBtn}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
