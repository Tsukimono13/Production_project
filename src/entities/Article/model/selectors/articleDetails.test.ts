import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('articleDetails', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return with error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'Error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('Error');
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
