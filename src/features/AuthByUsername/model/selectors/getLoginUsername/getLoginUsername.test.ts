import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginPUsername', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Tsuki',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Tsuki');
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
