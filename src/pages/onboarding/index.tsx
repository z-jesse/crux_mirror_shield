import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { GET_ACCOUNT_INFO } from '@/graphql/queries/account';
import { useQuery } from '@apollo/client';
import Wizard from '@/components/onboarding/wizard';
import EmailPassForm from '@/components/onboarding/steps/email-pass-form';


function getStepNumber(data: any) {
    return 2;
}

export default function SignUp() {
    const { loading: loading, error: error, data: data } = useQuery(GET_ACCOUNT_INFO);
    const router = useRouter();

   if (loading) return null

   const startingStep = getStepNumber(data);

    return (
        <>
            <Wizard startingStep={startingStep}>
                <EmailPassForm/>
                <h1>bye</h1>
                <h1>wassup</h1>
            </Wizard>
        </>
    )
}