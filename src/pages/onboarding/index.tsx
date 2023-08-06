import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { GET_ACCOUNT_INFO } from '@/graphql/queries/account';
import { useQuery } from '@apollo/client';
import OnboardingWizard from '@/components/onboarding/onboarding-wizard';



export default function SignUp() {
    const { loading: loading, error: error, data: data } = useQuery(GET_ACCOUNT_INFO);
    const router = useRouter();

    return (
        <>
            <OnboardingWizard/>
        </>
    )
}