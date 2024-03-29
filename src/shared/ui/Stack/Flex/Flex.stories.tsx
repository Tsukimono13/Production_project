import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
    gap: '4',
};
export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
    gap: '8',
};
export const RowGap16 = Template.bind({});
RowGap16.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
    gap: '16',
};
export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
    gap: '32',
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </>
    ),
    direction: 'column',
};

export const DarkColumn = Template.bind({});
DarkColumn.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </>
    ),
    direction: 'column',
};

DarkColumn.decorators = [ThemeDecorator(Theme.DARK)];

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
    gap: '16',
    direction: 'column',
};

export const ColumnAlignEndGap = Template.bind({});
ColumnAlignEndGap.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
    gap: '4',
    direction: 'column',
    align: 'end',
};
