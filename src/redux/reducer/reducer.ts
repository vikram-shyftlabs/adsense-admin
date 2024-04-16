import { combineReducers } from 'redux'
import CampaignSlice from '../slices/CampaignSlice';
import AccountLinkSlice from '../slices/AccountLinkSlice';
// Main Reducer
const reducer = combineReducers({
    // here we will be adding reducers
    campaign: CampaignSlice,   
    accountLink: AccountLinkSlice,
});

export default reducer;