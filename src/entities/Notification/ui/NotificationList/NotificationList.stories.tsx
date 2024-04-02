import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
})];

const mock = {
    url: `${__API__}/notifications`,
    method: 'GET',
    status: 200,
    response: [
        {
            id: '1',
            title: 'Уведомление',
            description: 'Остьвьте свой комментарий',
        },
        {
            id: '2',
            title: 'Уведомление 2',
            description: 'Пользователю понравилась ваша статья',
        },
        {
            id: '3',
            title: 'Уведомление 3',
            description: '... оставил комментарий',
        },
    ],
};

Light.parameters = {
    mockData: [
        mock,
    ],
};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({

})];
Dark.parameters = {
    mockData: [
        mock,
    ],
};
