import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        <AvatarDropdown {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
            avatar: 'https://w7.pngwing.com/pngs/926/762/png-transparent-avatar-blond-female-girl-person-user-woman-user-pictures-icon.png',
            roles: [UserRole.ADMIN],
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
            avatar: 'https://w7.pngwing.com/pngs/926/762/png-transparent-avatar-blond-female-girl-person-user-woman-user-pictures-icon.png',
            roles: [UserRole.ADMIN],
        },
    },
})];
