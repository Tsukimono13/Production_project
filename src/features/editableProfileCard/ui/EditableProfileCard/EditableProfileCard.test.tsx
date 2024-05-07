import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 44,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('feature/EditableProfileCard', () => {
    test('режим read only должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeaderCard.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileHeaderCard.CancelButton'),
        ).toBeInTheDocument();
    });
    test('при отмене редактирования, значения обнуляются', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeaderCard.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstName'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastName'),
            'user',
        );

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileHeaderCard.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
    });
    test('должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeaderCard.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

        await userEvent.click(
            screen.getByTestId('EditableProfileHeaderCard.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });
    test('если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileHeaderCard.EditButton'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstName'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileHeaderCard.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
