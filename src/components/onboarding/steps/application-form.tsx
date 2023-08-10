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
            {currentStep}
        </>
    )
}