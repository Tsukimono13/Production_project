import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return error', () => {
        const data = {
            age: 22,
            city: 'Stav',
            country: Country.Russia,
            currency: Currency.RUB,
            first: 'Tsuki',
            lastname: 'Mono',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
