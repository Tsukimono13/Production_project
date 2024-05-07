import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
