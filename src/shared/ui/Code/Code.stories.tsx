import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {
    codeText: `export const Light = Template.bind({});
    Light.args = {
        children: "export default {
            title: 'shared/Code',
            component: Code,
            argTypes: {
                backgroundColor: { control: 'color' },
            },
        } as ComponentMeta<typeof Code>;";
    };`,
};

export const Dark = Template.bind({});
Dark.args = {
    codeText: `export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;`,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
