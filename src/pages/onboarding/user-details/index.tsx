import React, { useEffect } from "react";
import Router from "next/router";
import { CONFIRM_EMAIL } from "@/graphql/mutations/onboarding";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER_DETAIL } from "@/graphql/mutations/account";
import { GET_ACCOUNT_INFO } from "@/graphql/queries/account";


export default function UserDetails() {
    const { loading: queryLoading, error: queryError, data: queryData } = useQuery(GET_ACCOUNT_INFO);
    const [updateUserDetail, { data, loading, error }] = useMutation(UPDATE_USER_DETAIL, {
        refetchQueries: [
          GET_ACCOUNT_INFO
        ],
      });

    useEffect(() => {
        if (!queryData) {
            Router.push('/onboarding/login');
        } else {
            if (queryData.getAccountInfo.status === "ACTIVE") {
                Router.push('/dashboard')
            }
        }
    })


    function updateUserInformation(e :any) {
        e.preventDefault();
        
        const first = e.target.firstName.value;
        const middle = e.target.middleName.value;
        const last = e.target.lastName.value;
        const dob = e.target.dob.value;
        const phone = e.target.phone.value;
        const street = e.target.street.value;
        const street2 = e.target.street2.value;
        const city = e.target.city.value;
        const state = e.target.state.value;
        const postalCode = e.target.postalCode.value;
        const country = e.target.country.value;
        const ssn = e.target.ssn.value;

        const userInformation = {
            phone: phone,
            firstName: first,
            lastName: last,
            dob: dob,
            middleName: middle,
            city: city,
            country: country,
            postalCode: Number(postalCode),
            region: state,
            street: street,
            street2: street2,
            govId: Number(ssn)
        }

        updateUserDetail({ variables: { userInformation }})
    }

    function validateParams(first: string, last: string, dob: Date, phone: string): boolean {
        return true;
    }

    if (queryData && !queryData.getAccountInfo.emailConfirmed) {
        return <ConfirmEmail/>
    }

    return (
        <>
        <form onSubmit={updateUserInformation}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">First Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="firstName" type="text" placeholder="Jane"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-last-name">Middle Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="middleName" type="text" placeholder="Doe"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-last-name">Last Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="lastName" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-dob">Date of Birth *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="dob" type="date" placeholder="MM/DD/YYYY"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-phone">Phone Number *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="phone" type="tel" placeholder="(234) 567-8910"/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-dob">Street *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="street" type="text" placeholder="47 N Humboldt Street"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-phone">Street 2 *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="street2" type="text" placeholder="Unit 324"/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-dob">City *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="city" type="text" placeholder="San Jose"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-phone">State *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="state" type="text" placeholder="Utah"/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-dob">Zip Code *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="postalCode" type="number" placeholder="42424"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-phone">Country *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="country" type="text" placeholder="US"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-phone">SSN *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="ssn" type="number" placeholder="434 43 4324"/>
                </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' type='submit'>Input Information</button>
            </div>
        </form>
                    <button onClick={() => Router.push('/onboarding')}>yolo wu</button>

                    </>
    )
}

function ConfirmEmail() {
    const [confirmEmail, { data, loading, error }] = useMutation(CONFIRM_EMAIL, {
        refetchQueries: [
          GET_ACCOUNT_INFO
        ],
      });

    async function confirmEmailHandler(e :any) {
        e.preventDefault();

        const confirmationToken = e.target.token.value;

        const response = await confirmEmail({ variables: { confirmationToken }});
    }

    return <>
        <form onSubmit={confirmEmailHandler}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">Confirmation Token</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="token" type="text" placeholder="********************"/>
                </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' type='submit'>Confirm Email</button>
            </div>
        </form>
    </>
}