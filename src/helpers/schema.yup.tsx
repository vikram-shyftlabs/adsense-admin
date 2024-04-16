import * as yup from "yup";

const campaignFormValidationSchema = yup.object({
  campaign_name: yup.string().required("Campaign Name is Required").min(3),
  adItem_name: yup.string().required("Ad Item Name is Required").min(3),
});

export { campaignFormValidationSchema };
