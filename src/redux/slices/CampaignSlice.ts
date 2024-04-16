import { createSlice } from '@reduxjs/toolkit';
import  CampaignThunk  from '../thunk/CampaignThunk'; // Import the thunk function correctly

const initialState = {
  campaign: {},
  isLoading: false,
  error: null,
};

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(CampaignThunk.createCampaign.fulfilled, (state, action) => {
      state.campaign = action.payload;
      console.log(action);
    });
  },
  
});

export default campaignSlice.reducer;
