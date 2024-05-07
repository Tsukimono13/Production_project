import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    items: [
        { content: 'Hello, world 123232,', value: 'world' },
        { content: 'Hello, people r4t4tt', value: 'people' },
    ],
    value: 'world',
};
export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { content: 'Hello,world 344444', value: 'world' },
        { content: 'Hello,people erggerg', value: 'people' },
    ],
    direction: 'top left',
    value: 'world',
};
export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { content: 'Hello, world 45452233455', value: 'world' },
        { content: 'Hello, people 4545342455', value: 'people' },
    ],
    direction: 'top right',
    value: 'world',
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { content: 'Hello, world 3453425', value: 'world' },
        { content: 'Hello, people 3453453345', value: 'people' },
    ],
    direction: 'bottom left',
    value: 'world',
};
export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { content: 'Hello, world 3453432545', value: 'world' },
        { content: 'Hello, people 34t45345455', value: 'people' },
    ],
    direction: 'bottom right',
    value: 'world',
};
