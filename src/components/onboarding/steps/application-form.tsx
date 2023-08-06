import React from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ACCOUNT_INFO } from "@/graphql/queries/account";
import { UPDATE_USER_DETAIL } from "@/graphql/mutations/account";

interface ApplicationFormProps {
    nextStep(): void;
}

export default function ApplicationForm({nextStep}: ApplicationFormProps) {
    const [updateUserDetail, { data, loading, error }] = useMutation(UPDATE_USER_DETAIL, {
        refetchQueries: [
          GET_ACCOUNT_INFO
        ],
      });



    return (
        <>
            <form>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">First Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="firstName" type="text" placeholder="Jane"/>
                </div>
            </form>
        </>
    )
}