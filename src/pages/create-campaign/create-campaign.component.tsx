import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Steps } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import { campaignFormValidationSchema } from "../../helpers/schema.yup";
import CreateCampaignForm from "../../components/create-campaign/create-campaign-form.jsx";

import Header from "../../components/header/header.component";
interface CampaignCreate {
  campaign_name: string;
  adItem_name: string;
}

const Campaign: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const {
    register: registerCampaign,
    handleSubmit: handleSubmitCampaign,
    formState: { errors: campaignErrors },
  } = useForm<CampaignCreate>({
    defaultValues: {
      campaign_name: "",
      adItem_name: "",
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
