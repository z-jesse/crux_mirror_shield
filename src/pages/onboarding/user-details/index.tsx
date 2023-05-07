import React, { useEffect } from "react";
import axios from "axios";
import Router from "next/router";

import { useSelector } from "react-redux";
import { RootState } from "@/../state/store";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';

import { initUser } from "../../../../state/slices/userSlice";

export default function UserDetails() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        if (!user.authenticated) {
            Router.push('/onboarding/login');
        } else {
            if (user.user.status === "active") {
                Router.push('/dashboard')
            }
        }
    })

    async function updateUserInformation(e :any) {
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

        if (validateParams(first, last, dob, phone)) {
            axios.post(`http://localhost:3001/api/v1/onboarding/update-user-information`, {
                id: "id" in user.user? user.user.id: 0,
                first_name: first,
                middle_name: middle,
                last_name: last,
                dob: dob,
                phone: phone,
                street: street,
                street2: street2,
                city: city,
                state: state,
                postalCode: postalCode,
                country: country,
                ssn: ssn,
            }, { withCredentials: true } ).then(async (res) => {
                await dispatch(initUser());
                Router.push("/dashboard")
            })
        }
    }

    function validateParams(first: string, last: string, dob: Date, phone: string): boolean {
        return true;
    }

    if (!user.user.email_confirmed) {
        return <ConfirmEmail/>
    }

    return (
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
    )
}

function ConfirmEmail() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    async function confirmEmail(e :any) {
        e.preventDefault()

        axios.post(`http://localhost:3001/api/v1/onboarding/confirm-email`, {
            confirmation_token: e.target.token.value,
            }, { withCredentials: true } ).then(async (res) => {
                await dispatch(initUser())
            })
    }

    return <>
        <form onSubmit={confirmEmail}>
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