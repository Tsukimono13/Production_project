import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});
Light.args = {
    item: {
        id: '1',
        title: 'Уведомление',
        description: 'Остьвьте свой комментарий',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: '1',
        title: 'Уведомление',
        description: 'Остьвьте свой комментарий',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
