import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { campaignFormValidationSchema } from "../../helpers/schema.yup";
import TextInput from "../../components/text-inputs/text-input.component";

interface CampaignCreate {
  campaign_name: string;
  adItem_name: string;
}

const Campaign: React.FC = () => {
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
      <h2>Campaign</h2>
      <p>This is the Campaign page.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          isRequired
          id="campaign_name"
          label="Campaign Name"
          placeholder="Campaign Name"
          register={register}
          errorMessage={errors.adItem_name?.message}
          customClass="mt-5"
        />
        <TextInput
          isRequired
          id="adItem_name"
          label="Ad Item Name"
          register={register}
          placeholder="Ad item name"
          errorMessage={errors.adItem_name?.message}
        />
      </form>
    </div>
  );
};

export default Campaign;
