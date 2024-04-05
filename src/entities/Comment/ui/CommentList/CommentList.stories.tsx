import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = {
    comments: [
        {
            id: '1',
            text: 'Hello',
            user: { id: '1', username: 'UserMono' },
        },
        {
            id: '2',
            text: 'How are you?',
            user: { id: '2', username: 'Tsuki' },
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'Hello',
            user: { id: '1', username: 'UserMono' },
        },
        {
            id: '2',
            text: 'How are you?',
            user: { id: '2', username: 'Tsuki' },
        },
    ],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'Hello',
            user: { id: '1', username: 'UserMono' },
        },
        {
            id: '2',
            text: 'How are you?',
            user: { id: '2', username: 'Tsuki' },
        },
    ],
    isLoading: true,
};

Loading.decorators = [ThemeDecorator(Theme.BRIGHT)];

export const Empty = Template.bind({});
Empty.args = {
    comments: [],
    isLoading: true,
};
