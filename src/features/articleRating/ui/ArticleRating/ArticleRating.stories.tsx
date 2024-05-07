import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    articleId: '1',
};

Primary.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

const mock = {
    url: `${__API__}/article-ratings?userId=1&articleId=1`,
    method: 'GET',
    status: 200,
    response: [
        {
            rate: 4,
        },
    ],
};

Primary.parameters = {
    mockData: [mock],
};

export const Dark = Template.bind({});
Dark.args = {
    articleId: '1',
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

Dark.parameters = {
    mockData: [mock],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};

WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
