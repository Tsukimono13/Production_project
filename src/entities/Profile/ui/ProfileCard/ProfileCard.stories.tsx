import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ImgTest from '@/shared/assets/tests/chibi.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        age: 22,
        city: 'Stav',
        country: Country.Russia,
        currency: Currency.RUB,
        first: 'Tsuki',
        lastname: 'Mono',
        username: 'admin',
        avatar: ImgTest,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'Error',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
