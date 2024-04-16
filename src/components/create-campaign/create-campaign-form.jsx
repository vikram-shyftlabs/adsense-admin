import React from 'react';
import AdsForm from './AdsForm';
import CampaignForm from './CampaignForm';
import AdGroupForm from './AdGroupForm';

const CreateCampaignForm = ({ current, onSubmitCampaign, handleSubmitCampaign, registerCampaign, campaignErrors, onSubmitAdGroup, handleSubmitAdGroup, registerAdGroup, adGroupErrors, onSubmitAd, handleSubmitAd, registerAd, adErrors, setCurrent }) => {
    return (
        <div>
                {
                    current === 0 ? <CampaignForm errors={campaignErrors} register={registerCampaign} setCurrent={setCurrent} onSubmit={onSubmitCampaign} handleSubmit={handleSubmitCampaign} /> :
                        current === 1 ? <AdGroupForm errors={adGroupErrors} register={registerAdGroup} setCurrent={setCurrent} onSubmit={onSubmitAdGroup} handleSubmit={handleSubmitAdGroup} /> :
                            current === 2 ? <AdsForm errors={adErrors} register={registerAd} setCurrent={setCurrent} onSubmit={onSubmitAd} handleSubmit={handleSubmitAd} /> : null
                }
                <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    );
}

export default CreateCampaignForm;