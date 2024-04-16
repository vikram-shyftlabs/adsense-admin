import React from "react";
import TextInput from "../../components/text-inputs/text-input.component";
import SelectBase from "../select-inputs/select-input.component";

const areas = [
  { id: 0, value: "INDIA" },
  { id: 1, value: "United States" },
];
const languages = [
  { id: 0, value: "ENGLISH" },
  { id: 1, value: "HINDI" },
];
const ages = [
  { id: 0, value: "10-20" },
  { id: 1, value: "20-30" },
];
const keywords = [
  { id: 0, value: "broad" },
  { id: 1, value: "phrase" },
  { id: 2, value: "exact" },
];

const AdGroupForm = ({ errors, register, setCurrent, onSubmit, handleSubmit ,setValuesAdGroup}) => {  
  console.log(errors);
  return (
    <div className="min-h-[70vh] p-10 relative">
      <form className="grid grid-cols-2 gap-10" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          // isRequired
          id="name"
          label="Ad Group/Set Name"
          placeholder="Enter Ad Group"
          register={register}
          errorMessage={errors?.name?.message}
        />
        <SelectBase
          id="geographic_targeting"
          label="Geographic Targeting"
          options={areas}
          setValue={setValuesAdGroup}
          register={register}
        />
        <SelectBase
          id="language_targeting"
          label="Language Targeting"
          options={languages}
          setValue={setValuesAdGroup}
          register={register}
        />
        <SelectBase
          id="age_targeting"
          label="Age Targeting"
          options={ages}
          setValue={setValuesAdGroup}
          register={register}
        />
        <TextInput
          // isRequired
          id="keywords"
          label="Keywords"
          register={register}
          placeholder="Enter keywords"
          errorMessage={errors?.keywords?.message} // Updated property name to 'keywords'
        />

        <SelectBase
          id="keyword_match_types"
          label="Select Keyword Match Types"
          options={keywords}
          setValue={setValuesAdGroup}
          register={register}
        />
        <button
          className="absolute bottom-5 right-5 mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default AdGroupForm;
