import {createAsyncThunk} from '@reduxjs/toolkit';
import CampaignService from "../actions/CampaignAction";
import { CREATE_CAMPAIGN } from '../types/CampaignActionType';

const CampaignThunk = {

    createCampaign : createAsyncThunk(CREATE_CAMPAIGN, async () => {
        try{
            const response = await CampaignService.createCampaign();
            return response;
        }catch (e) {
            throw e?.response?.data || e.message;
        }

    }),

  
};

export default CampaignThunk;
