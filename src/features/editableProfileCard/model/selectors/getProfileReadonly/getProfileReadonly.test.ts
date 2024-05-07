import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
