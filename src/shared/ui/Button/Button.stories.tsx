import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
};

Clear.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

OutlineLight.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeS = Template.bind({});
OutlineSizeS.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.S,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Round = Template.bind({});
Round.args = {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    round: true,
};

export const RoundSizeS = Template.bind({});
RoundSizeS.args = {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    round: true,
    size: ButtonSize.S,
};

export const RoundSizeM = Template.bind({});
RoundSizeM.args = {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    round: true,
    size: ButtonSize.M,
};

export const RoundSizeL = Template.bind({});
RoundSizeL.args = {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    round: true,
    size: ButtonSize.L,
};
