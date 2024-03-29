import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Lorem ipsum dolor',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Lorem ipsum dolor',
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
    size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
    size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quia.',
    size: TextSize.L,
};
