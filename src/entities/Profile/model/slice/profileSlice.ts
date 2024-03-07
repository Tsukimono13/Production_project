import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    readonly: true,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;