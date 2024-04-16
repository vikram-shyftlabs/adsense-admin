import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Steps } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import { campaignFormValidationSchema } from "../../helpers/schema.yup";
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

const Campaign: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const {
    register: registerCampaign,
    handleSubmit: handleSubmitCampaign,
    formState: { errors: campaignErrors },
  } = useForm<CampaignCreate>({
    defaultValues: {
      name: "",
      platform: "",
      objective:"",
      daily_budget: 0,
      // start_date:"",
      // end_date:"",
      bidding_strategy:"",
      bid_amount:0,

    },
    resolver: yupResolver(campaignFormValidationSchema),
  });

  const {
    register: registerAdGroup,
    handleSubmit: handleSubmitAdGroup,
    formState: { errors: adGroupErrors },
  } = useForm<AdGroupCreate>({
    // Define your AdGroup form configuration here
  });

  const {
    register: registerAd,
    handleSubmit: handleSubmitAd,
    formState: { errors: adErrors },
  } = useForm<AdCreate>({
    // Define your Ad form configuration here
  });

  const onSubmitCampaign = (formData: CampaignCreate) => {
    alert('called')
    console.log(formData, "Campaign formData");
    setCurrent(current + 1); // Move to next step
  };

  const onSubmitAdGroup = (formData: AdGroupCreate) => {
    console.log(formData, "AdGroup formData");
    setCurrent(current + 1); // Move to next step
  };

  const onSubmitAd = (formData: AdCreate) => {
    console.log(formData, "Ad formData");
    // Handle submission of Ads form
  };


  return (
    <div>
      <Header props={{ title: "Add new Campaign" }} />
      <div className="p-12">
        <Steps
          current={current}
          items={[
            {
              title: 'Campaign',
            },
            {
              title: 'Ad Group',
            },
            {
              title: 'Ads',
            },
          ]}
        />
        <CreateCampaignForm current={current}
         onSubmitCampaign={onSubmitCampaign} handleSubmitCampaign={handleSubmitCampaign} registerCampaign={registerCampaign} errorsCampaign={campaignErrors}
         onSubmitAdGroup={onSubmitAdGroup} handleSubmitAdGroup={handleSubmitAdGroup} registerAdGroup={registerAdGroup} errorsAdGroup={adGroupErrors}
         onSubmitAd={onSubmitAd} handleSubmitAd={handleSubmitAd} registerAd={registerAd} errorsAd={adErrors}
         setCurrent={setCurrent} />
      </div>
    </div>
  );
};

export default Campaign;
