import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileHeaderCard } from './EditableProfileHeaderCard';

export default {
    title: 'features/EditableProfileCard/EditableProfileHeaderCard',
    component: EditableProfileHeaderCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileHeaderCard>;

const Template: ComponentStory<typeof EditableProfileHeaderCard> = (args) => <EditableProfileHeaderCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
