import React, { useState } from "react";
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CampaignCreate>({
    defaultValues: {
      campaign_name: "",
      adItem_name: "",
    },
    resolver: yupResolver(campaignFormValidationSchema),
  });

  const onSubmit = (formData: any) => {
    console.log(formData, "formData");
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
        <CreateCampaignForm current={current} onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors} setCurrent={setCurrent} />
      </div>
    </div>
  );
};

export default Campaign;
