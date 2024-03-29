import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { action } from '@storybook/addon-actions';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
