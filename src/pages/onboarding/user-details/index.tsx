import React from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "@/../state/store";

export default function UserDetails() {

    const user = useSelector((state: RootState) => state.user);

    function updateUserInformation(e :any) {
        e.preventDefault();
        
        const first = e.target.firstName.value;
        const last = e.target.lastName.value;
        const dob = e.target.dob.value;
        const phone = e.target.phone.value;

        if (validateParams(first, last, dob, phone)) {
            axios.post(`http://localhost:3001/api/v1/onboarding/update-user-information`, {
                id: user.id,
                first_name: first,
                last_name: last,
                dob: dob,
                phone: phone,
            }, { withCredentials: true } ).then((res) => {
                console.log(res.data)
            })
        }
    }

    function validateParams(first: string, last: string, dob: Date, phone: string): boolean {
        return true;
    }

    return (
        <form onSubmit={updateUserInformation}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">First Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="firstName" type="text" placeholder="Jane"/>
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
            <div className='flex justify-center items-center mb-3'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' type='submit'>Sign up</button>
            </div>
        </form>
    )
}