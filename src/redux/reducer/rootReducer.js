import { combineReducers } from '@reduxjs/toolkit';
import accountLinkReducer from '../slices/AccountLinkSlice';
import campaignReducer from '../slices/CampaignSlice';
// Import other reducers as needed

const rootReducer = combineReducers({
  accountLink: accountLinkReducer,
  campaign: campaignReducer,
  // Add other slice reducers here
});

export default rootReducer;
