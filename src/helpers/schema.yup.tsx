import * as yup from "yup";

const campaignFormValidationSchema = yup.object({
  name: yup.string().required("Campaign Name is Required").min(3),
  platform: yup.string().required("Platform is Required"),
  objective: yup.string().required("Objective is Required"),
  daily_budget: yup.number().required("Daily Budget is Required"),
  // start_date: yup.string().required("Start Date is Required"),
  // end_date: yup.string().required("End Date is Required"),
  bidding_strategy: yup.string().required("Bidding Strategy is Required"),
  bid_amount: yup.number().required("Bid Amount is Required"),
});

export { campaignFormValidationSchema };
