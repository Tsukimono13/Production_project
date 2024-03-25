import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'features/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage />;

export const Normal = Template.bind({});
Normal.args = {};
