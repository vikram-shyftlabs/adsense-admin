import React from 'react';
import AdsForm from './AdsForm';
import CampaignForm from './CampaignForm';
import AdGroupForm from './AdGroupForm';

const CreateCampaignForm = ({ current, handleSubmit, onSubmit, register, errors, setCurrent }) => {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    current === 0 ? <CampaignForm errors={errors} register={register} setCurrent={setCurrent} /> :
                    current === 1 ? <AdGroupForm errors={errors} register={register} setCurrent={setCurrent} /> :
                    current === 2 ? <AdsForm errors={errors} register={register} setCurrent={setCurrent} /> : null
                }
            </form>
        </div>
    );
}

export default CreateCampaignForm;