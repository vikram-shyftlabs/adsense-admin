import React from "react";
import AdsForm from "./AdsForm";
import CampaignForm from "./CampaignForm";
import AdGroupForm from "./AdGroupForm";

const CreateCampaignForm = ({
  current,
  onSubmitCampaign,
  handleSubmitCampaign,
  setValuesCampaign,
  setValuesAdGroup,
  registerCampaign,
  registerAdGroup,
  errorsCampaign,
  onSubmitAdGroup,
  handleSubmitAdGroup,
  errorsAdGroup,
  onSubmitAd,
  handleSubmitAd,
  registerAd,
  errorsAd,
  handleBack,
  getValuesCampaign,
  getValuesAdGroup
}) => {
  return (
    <div>
      {current === 0 ? (
        <CampaignForm
          errors={errorsCampaign}
          setValuesCampaign={setValuesCampaign}
          register={registerCampaign}
          onSubmit={onSubmitCampaign}
          handleSubmit={handleSubmitCampaign}
          getValuesCampaign={getValuesCampaign}
        />
      ) : current === 1 ? (
        <AdGroupForm
          errors={errorsAdGroup}
          register={registerAdGroup}
          onSubmit={onSubmitAdGroup}
          setValuesAdGroup={setValuesAdGroup}
          handleSubmit={handleSubmitAdGroup}
          handleBack={handleBack}
          getValuesAdGroup={getValuesAdGroup}
        />
      ) : current === 2 ? (
        <AdsForm
          errors={errorsAd}
          register={registerAd}
          onSubmit={onSubmitAd}
          handleSubmit={handleSubmitAd}
          handleBack={handleBack}
        />
      ) : null}      
    </div>
  );
};

export default CreateCampaignForm;
