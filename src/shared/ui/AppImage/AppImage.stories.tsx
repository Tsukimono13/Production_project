import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {

};

Secondary.decorators = [ThemeDecorator(Theme.DARK)];
