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
            <h1> input confirmation form </h1>
            <input 
                type="text"
                maxLength={6}
                onChange={validateCode}
            >

            </input>
        </>
    )
}