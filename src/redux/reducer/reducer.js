import { combineReducers } from 'redux'
import CampaignSlice from '../slices/CampaignSlice';
// Main Reducer
const reducer = combineReducers({
    // here we will be adding reducers
    campaign: CampaignSlice,   
});

export default reducer;