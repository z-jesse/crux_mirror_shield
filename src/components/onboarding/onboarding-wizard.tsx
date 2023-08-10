import React, { useState } from "react";
import { GET_ACCOUNT_INFO } from '@/graphql/queries/account';
import { useQuery } from '@apollo/client';
import EmailPassForm from "./steps/email-pass-form";
import ConfirmEmailForm from "./steps/confirm-email-form";
import ApplicationForm from "./steps/application-form";
import FormLayout from "./steps/wrapper";

function getStepNumber(data: any) {
    if (!data.getAccountInfo) {
        return 0
    } else if (!data.getAccountInfo.emailConfirmed) {
        return 1
    } else if (!data.getAccountInfo.userDetail) {
        return 2
    }
    else return 3
}

export default function OnboardingWizard() {
    const { loading: loading, error: error, data: data } = useQuery(GET_ACCOUNT_INFO);

    if (loading) return null

    const startingStep = getStepNumber(data);

    const [activePageIndex, setActivePageIndex] = useState(startingStep);

    const goNextPage = () => {
        setActivePageIndex(index => index + 1);
    };
    
    const goPrevPage = () => {
        setActivePageIndex(index => index - 1);
    };

    const steps = [
        <EmailPassForm
            nextStep={goNextPage}
        />,
        <ConfirmEmailForm
            nextStep={goNextPage}
         />,
        <ApplicationForm
            nextStep={goNextPage}
        />
    ]
    const currentStep = steps[activePageIndex];


    const ButtonPrev = () =>
        activePageIndex > 0 ? (
            <button
                type="button"
                onClick={goPrevPage}
            >
                previous
            </button>
        ) : null;
    const ButtonNext = () =>
        activePageIndex < steps.length - 1 ? (
            <button
                type="button"
                onClick={goNextPage}
            >
                continue
            </button>
        ) : null;

    return <>
        <FormLayout>
            {currentStep}
        </FormLayout>
        <ButtonPrev/>
        <ButtonNext/>
    </>
}