import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { CONFIRM_PHONE } from '@/graphql/mutations/onboarding';
import { GET_ACCOUNT_INFO } from "@/graphql/queries/account";

interface PhoneVerificationProps {
    setStep(step: number): void;
}

export default function PhoneVerification({
    setStep
}: PhoneVerificationProps) {
    const [confirmPhone, { data, loading, error }] = useMutation(CONFIRM_PHONE, {
        refetchQueries: [
            GET_ACCOUNT_INFO
          ],
    });
    const { loading: accountLoading, error: accountError, data: accountData } = useQuery(GET_ACCOUNT_INFO);

    const [continuable, setContinuable] = useState(false);

    useEffect(() => {
        if (accountData.getAccountInfo.phoneConfirmed) {
            setContinuable(true);
        }
    })

    async function validateCode(e: any) {
        e.preventDefault();

        const confirmationToken = e.target.value;
        if (confirmationToken.length === 6) {
            await confirmPhone({ variables: { confirmationToken }})
            setContinuable(true);
        }
    }

    if (loading) return null;
    return (
        <>
            {continuable ? 
                <>
                    <h1>Phone Confirmed</h1>
                    <div className='flex justify-center items-center mb-3'>
                        <button 
                            className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20'
                            onClick={() => setStep(2)}
                        >
                                Continue
                        </button>
                    </div>
                </>
            : 
                <>
                    <h1> input confirmation form </h1>
                    <input 
                        type="text"
                        maxLength={6}
                        onChange={validateCode}
                    >
        
                    </input>
                </>
            }
            <button onClick={() => setStep(0)}> Back </button>
        </>
    )
}