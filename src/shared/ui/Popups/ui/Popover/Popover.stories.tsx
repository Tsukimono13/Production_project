import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Light = Template.bind({});
Light.args = {
    trigger: <Button>Open</Button>,
    children: (
        <>
            <div>Hi</div>
            <div>Hello</div>
            <div>How are you</div>
        </>
    ),
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Open</Button>,
    children: (
        <div>Storybook let us pass different props to a component in each story.</div>
    ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
