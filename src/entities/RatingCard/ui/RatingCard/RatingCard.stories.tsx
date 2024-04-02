import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Оцените статью',
};

export const Rated = Template.bind({});
Rated.args = {
    title: '',
    rate: 4,
};

export const Dark = Template.bind({});
Dark.args = {
    title: '',
    rate: 3,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
