import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    googleToken: '',
    facebookToken: '',
    isLoading: false,
    error: null,
};

const accountLinkSlice = createSlice({
    name: 'accountLink',
    initialState,
    reducers: {
        setGoogleToken: (state, action) => {
            state.googleToken = action.payload;
        },
        setFacebookToken: (state, action) => {
            state.facebook = action.payload;
        }
    }
});

export const { setGoogleToken,setFacebookToken } = accountLinkSlice.actions;
export default accountLinkSlice.reducer;
