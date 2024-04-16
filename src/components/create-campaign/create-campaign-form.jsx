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
  setCurrent,
}) => {
  return (
    <div>
      {current === 0 ? (
        <CampaignForm
          errors={errorsCampaign}
          setValuesCampaign={setValuesCampaign}
          register={registerCampaign}
          setCurrent={setCurrent}
          onSubmit={onSubmitCampaign}
          handleSubmit={handleSubmitCampaign}
        />
      ) : current === 1 ? (
        <AdGroupForm
          errors={errorsAdGroup}
          register={registerAdGroup}
          setCurrent={setCurrent}
          onSubmit={onSubmitAdGroup}
          setValuesAdGroup={setValuesAdGroup}
          handleSubmit={handleSubmitAdGroup}
        />
      ) : current === 2 ? (
        <AdsForm
          errors={errorsAd}
          register={registerAd}
          setCurrent={setCurrent}
          onSubmit={onSubmitAd}
          handleSubmit={handleSubmitAd}
        />
      ) : null}      
    </div>
  );
};

export default CreateCampaignForm;
