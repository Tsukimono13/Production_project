import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
    label: 'Select country',
    options: [
        { value: '1', content: 'Russia' },
        { value: '2', content: 'Turkey' },
        { value: '3', content: 'America' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Select country',
    options: [
        { value: '1', content: 'Russia' },
        { value: '2', content: 'Turkey' },
        { value: '3', content: 'America' },
    ],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
