import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        text: 'Hello',
        user: { id: '1', username: 'UserMono' },
    },
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'Hello',
        user: { id: '1', username: 'UserMono' },
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'Hello',
        user: { id: '1', username: 'UserMono' },
    },
    isLoading: true,
};
