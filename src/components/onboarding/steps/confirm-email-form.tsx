import React from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { CONFIRM_EMAIL } from '@/graphql/mutations/onboarding';
import { GET_ACCOUNT_INFO } from "@/graphql/queries/account";

interface ConfirmEmailProps {
    nextStep(): void;
}

export default function ConfirmEmailForm({nextStep}: ConfirmEmailProps) {
    const [confirmEmail, { data, loading, error }] = useMutation(CONFIRM_EMAIL, {
        refetchQueries: [
            GET_ACCOUNT_INFO
          ],
    });

    function validateCode(e: any) {
        e.preventDefault();

        const confirmationToken = e.target.value;
        if (confirmationToken.length === 6) {
            confirmEmail({ variables: { confirmationToken }})
        }
    }

    return (
        <>
        <div className="flex flex-col items-center">
            <h1 className="uppercase text-6xl lg:text-7xl xl:text-8xl font-condensed mb-24">Verification</h1>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-center font-mono">A verification code has been sent to your email.
            <br/>Code expires in 30 minutes.</p>
        </div>
        <div className="flex flex-col items-center">
            <input 
                className="w-1/2 text-5xl text-center border border-gray-700 py-2 px-10 mt-10 uppercase"
                type="text"
                maxLength={6}
                onChange={validateCode}
            ></input>
        </div>
        <div className="mx-auto max-w-lg align-center py-2">
                <p className="text-center font-mono">Didn't receive a code? <span className="font-bold text-custom_purple">Try again.</span>
                </p>
            </div>
        </>
    )
}