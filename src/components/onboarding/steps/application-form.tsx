import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ACCOUNT_INFO } from "@/graphql/queries/account";
import { UPDATE_USER_DETAIL } from "@/graphql/mutations/account";
import NamePhoneDOBForm from "./name-phone-dob-form";
import PhoneVerification from "./phone-verification";
import AddressForm from "./address-form";

interface ApplicationFormProps {
    nextStep(): void;
}

export default function ApplicationForm({nextStep}: ApplicationFormProps) {
    const [updateUserDetail, { data, loading, error }] = useMutation(UPDATE_USER_DETAIL, {
        refetchQueries: [
          GET_ACCOUNT_INFO
        ],
    });
    const [stepNumber, setStepNumber]  = useState(0);

    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const applicationSteps = [
        <NamePhoneDOBForm
            setStep={setStepNumber}
        />,
        <PhoneVerification
            setStep={setStepNumber}
        />,
        <AddressForm
            setAddress1={setAddress1}
            setAddress2={setAddress2}
            setCity={setCity}
            setState={setState}
            setZip={setZip}
        />
    ]

    const currentStep = applicationSteps[stepNumber];

    return (
        <>
        <div className="flex flex-col items-center">
            <h1 className="uppercase text-6xl lg:text-7xl xl:text-8xl font-condensed">Application</h1>
        </div>
        {/* <form>
            <div className="flex flex-row space-x-4">
                <div className="w-1/2">
                    <label className='block font-mono' htmlFor="grid-first-name">First Name *</label>
                    <input className='block w-full py-2 px-3 text-gray-700 font-mono border border-gray-700 hover:border-custom_purple' id="firstName" type="text" placeholder="Jane"/>
                </div>
                <div className="w-1/2">
                    <label className='block font-mono' htmlFor="grid-last-name">Last Name *</label>
                    <input className='block w-full py-2 px-3 text-gray-700 font-mono border border-gray-700 hover:border-custom_purple' id="lastName" type="tel" placeholder="Doe"/>
                </div>
            </div>
            <div className="flex flex-row space-x-4">
                <div className="w-1/2">
                    <label className='block font-mono' htmlFor="grid-first-name">Date of Birth *</label>
                    <input className='block w-full py-2 px-3 text-gray-700 font-mono border border-gray-700 hover:border-custom_purple' id="firstName" type="date"/>
                </div>
                <div className="w-1/2">
                    <label className='block font-mono' htmlFor="grid-last-name">Phone *</label>
                    <input className='block w-full py-2 px-3 text-gray-700 font-mono border border-gray-700 hover:border-custom_purple' id="lastName" type="tel" placeholder="123-456-7890"/>
                </div>
            </div>
            <div className="flex flex-col items-center mt-24">
                <button className="uppercase border border-gray-700 hover:bg-gray-700 text-gray-700 hover:text-white font-mono py-2 px-10" type="submit">Submit</button>
            </div>
        </form> */}
        {currentStep}
        </>
    )
}