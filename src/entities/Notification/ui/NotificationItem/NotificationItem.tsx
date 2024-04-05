import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <div
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text
                title={item.title}
                text={item.description}
                theme={TextTheme.BLACK}
                size={TextSize.XS}
            />
        </div>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
