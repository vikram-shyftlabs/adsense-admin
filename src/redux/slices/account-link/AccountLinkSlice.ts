import { createSlice } from "@reduxjs/toolkit";

interface IAccountState {
  googleToken: string;
  facebookToken: string;
  token: string;
}

const initialState = {
  googleToken: "",
  facebookToken: "",
  token:"",
};

const accountLinkSlice = createSlice({
  name: "accountLink",
  initialState,
  reducers: {
    setGoogleToken: (state: IAccountState, action) => {
      state.googleToken = action.payload.data.access_token;
    },
    setFacebookToken: (state: IAccountState, action) => {
      state.facebookToken = action.payload.data.access_token;
    },
    setToken: (state: IAccountState, action) => {
      state.token = action.payload;
    },
  },
});

export const { setGoogleToken, setFacebookToken,setToken } = accountLinkSlice.actions;
export default accountLinkSlice.reducer;