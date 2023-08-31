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

    const [codeError, setCodeError] = useState("");

    async function validateCode(e: any) {
        e.preventDefault();
        setCodeError("");

        const confirmationToken = e.target.value;
        if (confirmationToken.length === 6) {
            await confirmPhone({ variables: { confirmationToken }}).then((data) =>{
                if (data.data.confirmPhone.status === "failure") {
                    setCodeError("Invalid Code")
                } else {
                    setStep(2);
                }
            }) 
        }
    }

    return (
        <>
            <>
                <h1> input confirmation form </h1>
                <input 
                    type="text"
                    maxLength={6}
                    onChange={validateCode}
                >
    
                </input>
                <h1> { codeError } </h1>
            </>
            <button onClick={() => setStep(0)}> Back</button>
        </>
    )
}