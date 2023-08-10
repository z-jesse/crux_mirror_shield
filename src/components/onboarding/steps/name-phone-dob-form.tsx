import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ACCOUNT_INFO } from "@/graphql/queries/account";
import { UPDATE_USER_DETAIL } from "@/graphql/mutations/account";

interface NamePhoneDOBFormProps {
    setStep(step: number): void;
}

export default function NamePhoneDOBForm({
    setStep
}: NamePhoneDOBFormProps) {
    const { loading: loading, error: error, data: data } = useQuery(GET_ACCOUNT_INFO);
    const [updateUserDetail, { data: userDetailData, loading: userDetailLoading, error: useDetailError }] = useMutation(UPDATE_USER_DETAIL, {
        refetchQueries: [
          GET_ACCOUNT_INFO
        ],
    });

    const [continuable, setContinuable] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");

    useEffect(() => {
        if (firstName !== "" && lastName !== "" && phoneNumber !== "" && dob !== "") {
            setContinuable(true);
        }
    })

    useEffect(() => {
        const user = data.getAccountInfo
        if (user.userDetail) {
            setFirstName(user.userDetail.firstName);
            setLastName(user.userDetail.lastName);
            setPhoneNumber(user.userDetail.phone);
            setDob(user.userDetail.dob);
        }
    }, [])
    console.log(data)

    
    function nextStep() {
        const userInformation = {
            phone: phoneNumber,
            firstName: firstName,
            lastName: lastName,
            dob: dob,
        }
        updateUserDetail({ variables: { userInformation }})
        setStep(1);
    }


    if (loading) return null;

    return (
        <>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">First Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="firstName" type="text" placeholder="Jane"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-last-name">Last Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="lastName" type="text" placeholder="Doe"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
            </div>

            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-dob">Date of Birth *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="dob" type="date" placeholder="MM/DD/YYYY"
                        onChange={(e) => setDob(e.target.value)}
                        value={dob.substring(0, 10)}
                    />
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-phone">Phone Number *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="phone" type="tel" placeholder="(234) 567-8910"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                    />
                </div>
            </div>

            {continuable && <div className='flex justify-center items-center mb-3'>
                <button 
                    className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20'
                    onClick={nextStep}
                >
                        Continue
                </button>
            </div>}
        </>
    )
}