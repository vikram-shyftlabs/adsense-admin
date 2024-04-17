/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Steps } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  campaignFormValidationSchema,
  adGroupFormValidationSchema,
} from "../../helpers/schema.yup";
import CreateCampaignForm from "../../components/create-campaign/create-campaign-form.jsx";

import Header from "../../components/header/header.component";
interface CampaignCreate {
  name: string;
  platform: string;
  objective: string;
  daily_budget: number;
  start_date: string;
  end_date: string;
  bidding_strategy: string;
  bid_amount: number;
}

interface AdGroupCreate {
  name: string;
  geographic_targeting: string;
  language_targeting: string;
  age_targeting: string;
  keywords: string;
  keyword_match_types: string;
}

interface AdCreate {}

const Campaign: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const {
    getValues: getValuesCampaign,
    setValue: setValuesCampaign,
    register: registerCampaign,
    handleSubmit: handleSubmitCampaign,
    formState: { errors: campaignErrors },
  } = useForm<CampaignCreate>({
    defaultValues: {
      name: "",
      platform: "",
      objective: "",
      daily_budget: 0,
      start_date: "",
      end_date: "",
      bidding_strategy: "",
      bid_amount: 0,
    },
    resolver: yupResolver(campaignFormValidationSchema) as any,
  });

  console.log(getValuesCampaign(), "formState");

  const {
    register: registerAdGroup,
    getValues: getValuesAdGroup,
    setValue: setValuesAdGroup,
    handleSubmit: handleSubmitAdGroup,
    formState: { errors: adGroupErrors },
  } = useForm<AdGroupCreate>({
    defaultValues: {
      name: "",
      geographic_targeting: "",
      language_targeting: "",
      age_targeting: "",
      keywords: "",
      keyword_match_types: "",
    },
    resolver: yupResolver(adGroupFormValidationSchema) as any,
  });

  const {
    register: registerAd,
    handleSubmit: handleSubmitAd,
    // setValue: setValuesAd,
    // getValues: getValuesAd,
    formState: { errors: adErrors },
  } = useForm<AdCreate>({});

  const onSubmitCampaign = (formData: CampaignCreate) => {
    console.log(formData, "Campaign formData");
    setCurrent(current + 1); // Move to next step
  };

  const onSubmitAdGroup = () => {
    // console.log(getValuesAdGroup(), formData, "AdGroup formData");
    setCurrent(current + 1); // Move to next step
  };

  const onSubmitAd = (formData: AdCreate) => {
    console.log(formData, "Ad formData");
    // Handle submission of Ads form
  };

  const handleBack = () => {
    setCurrent(current - 1);
  }

  return (
    <div>
      <Header props={{ title: "Add New Campaign" }} />
      <div className="p-12 bg-white">
        <Steps
          current={current}
          items={[
            {
              title: "Campaign",
            },
            {
              title: "Ad Group",
            },
            {
              title: "Ads",
            },
          ]}
        />
        <CreateCampaignForm
          current={current}
          onSubmitCampaign={onSubmitCampaign}
          handleSubmitCampaign={handleSubmitCampaign}
          registerCampaign={registerCampaign}
          setValuesCampaign={setValuesCampaign}
          setValuesAdGroup={setValuesAdGroup}
          errorsCampaign={campaignErrors}
          onSubmitAdGroup={onSubmitAdGroup}
          handleSubmitAdGroup={handleSubmitAdGroup}
          registerAdGroup={registerAdGroup}
          errorsAdGroup={adGroupErrors}
          onSubmitAd={onSubmitAd}
          handleSubmitAd={handleSubmitAd}
          registerAd={registerAd}
          errorsAd={adErrors}
          handleBack={handleBack}
          getValuesCampaign={getValuesCampaign}
          getValuesAdGroup={getValuesAdGroup}
        />
      </div>
    </div>
  );
};

export default Campaign;
