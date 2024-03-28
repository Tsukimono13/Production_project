import { memo } from 'react';
import NotificationSvg from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={ThemeButton.CLEAR}>
                    <Icon
                        Svg={NotificationSvg}
                        width={22}
                        height={22}
                    />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
