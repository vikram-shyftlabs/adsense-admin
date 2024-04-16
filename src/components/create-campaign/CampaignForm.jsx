import React from "react";
import TextInput from "../text-inputs/text-input.component";
import SelectBase from "../select-inputs/select-input.component";
import { DatePicker } from "antd";

const advertisingPlatform = [
  { id: 0, value: "Google Ads" },
  { id: 1, value: "Meta Ads" },
];
const campaignObjectives = [
  { id: 0, value: "Brand Awareness" },
  { id: 1, value: "Traffic" },
  { id: 2, value: "Conversions" },
];
const biddingStrategies = [
  { id: 0, value: "Maximize Clicks" },
  { id: 1, value: "Target CPA" },
  { id: 2, value: "Target ROAS" },
];

const CampaignForm = ({
  errors,
  register,
  setCurrent,
  onSubmit,
  handleSubmit,
  setValuesCampaign,
}) => {
  console.log(errors);
  return (
    <div className="min-h-[80vh] p-10 relative">
      <form
        className="grid grid-cols-2 gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          // isRequired
          id="name"
          label="Campaign Name"
          placeholder="Enter Campaign Name"
          register={register}
          errorMessage={errors?.name?.message}
        />
        <SelectBase
          id="platform"
          label="Select Advertising Platform"
          register={register}
          setValue={setValuesCampaign}
          options={advertisingPlatform}
          errorMessage={errors?.platform?.message}
        />
        <SelectBase
          id="objective"
          label="Select Campaign Objective"
          options={campaignObjectives}
          register={register}
          setValue={setValuesCampaign}
          errorMessage={errors?.objective?.message}
        />
        <TextInput
          isRequired
          id="daily_budget"
          label="Daily Budget"
          register={register}
          placeholder="Enter Daily Budget"
          errorMessage={errors?.daily_budget?.message}
        />
        <SelectBase
          id="bidding_strategy"
          label="Bidding Strategy"
          setValue={setValuesCampaign}
          errorMessage={errors?.bidding_strategy?.message}
          options={biddingStrategies}
          register={register}
        />
        <TextInput
          isRequired
          id="bid_amount"
          label="Enter Bid Amount"
          register={register}
          placeholder="Enter Bid Amount"
          errorMessage={errors?.bid_amount?.message}
        />
        <div className="flex flex-col gap-1">
          <label className="font-semibold"> Start Date</label>
          <input
            id="start_date"
            type="date"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold"> End Date</label>
          <input id="end_date" type="date" onChange={(event) => {}} />
        </div>
        <button
          className="absolute bottom-5 right-5 mr-10 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CampaignForm;
