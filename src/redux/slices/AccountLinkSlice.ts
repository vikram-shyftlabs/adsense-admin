import { createSlice } from "@reduxjs/toolkit";

interface IAccountState {
  googleToken: string;
  facebookToken: string;
  isLoading: boolean;
  error: null;
}

const initialState = {
  googleToken: "",
  facebookToken: "",
  isLoading: false,
  error: null,
};

const accountLinkSlice = createSlice({
  name: "accountLink",
  initialState,
  reducers: {
    setGoogleToken: (state: IAccountState, action) => {
      state.googleToken = action.payload;
    },
    setFacebookToken: (state: IAccountState, action) => {
      state.facebookToken = action.payload;
    },
  },
});

export const { setGoogleToken, setFacebookToken } = accountLinkSlice.actions;
export default accountLinkSlice.reducer;
