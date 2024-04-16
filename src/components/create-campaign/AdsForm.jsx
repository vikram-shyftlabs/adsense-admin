import React from 'react';
import TextInput from "../../components/text-inputs/text-input.component";

const AdsForm = ({ errors, register, setCurrent }) => {
    return (
        <div className='min-h-[70vh] p-10 relative'>
            <div className="grid grid-cols-2 gap-10">
            <TextInput
                isRequired
                id="ad_name"
                label="Ad Name"
                placeholder="Enter Ad Name"
                register={register}
                errorMessage={errors?.ad_name?.message}
            />
            <TextInput
                isRequired
                id="identity"
                label="Identity"
                register={register}
                placeholder="Enter Identity"
                errorMessage={errors.identity?.message}
            />
            <button className='absolute bottom-5 right-5 mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                type='submit'
            >
                Submit
            </button>
            </div>
        </div>
    );
}

export default AdsForm;