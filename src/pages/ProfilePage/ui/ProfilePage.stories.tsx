import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ImgTest from '@/shared/assets/tests/chibi.png';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfilePage } from '..';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                age: 22,
                city: 'Stav',
                country: Country.Russia,
                currency: Currency.RUB,
                first: 'Tsuki',
                lastname: 'Mono',
                username: 'admin',
                avatar: ImgTest,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                age: 22,
                city: 'Stav',
                country: Country.Russia,
                currency: Currency.RUB,
                first: 'Tsuki',
                lastname: 'Mono',
                username: 'admin',
                avatar: ImgTest,
            },
        },
    }),
];
