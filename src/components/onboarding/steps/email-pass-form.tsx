import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from '@/graphql/mutations/onboarding';
import { GET_ACCOUNT_INFO } from "@/graphql/queries/account";

interface EmailPassFormProps {
    nextStep(): void;
}

export default function EmailPassForm({nextStep}: EmailPassFormProps) {
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
        refetchQueries: [
            GET_ACCOUNT_INFO
          ],
    });

    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");

    const router = useRouter();

    async function registerUser(e :any) {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (validateParams(email, password)) {
            const authProvider = {
                credentials: {
                    email: email,
                    password: password
                }
            }
            const response = await createUser({ variables: { authProvider }});
            nextStep()
        }
    }

    function validateParams(email:string, password:string): boolean  {
        const refinedEmail = email.trim().toLowerCase();
        const refinedPassword = password.trim();

        // email and password should not be empty
        if (!refinedEmail) {
            setEmailError("Required field")
            return false;
        }
        
        //valid email
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(refinedEmail)) {
            setEmailError("Must input valid email")
            return false;
        }

        if (password.length < 8) {
            setPassError("Password must be minimum 8 characters")
            return false;
        }

        return true;
    }

    return (
        <>
        <form onSubmit={registerUser}>
            {/* <BreadComp index={0} /> */}
            <div>
                <div className="flex">
                    <div className="flex flex-col w-1/2 justify-center px-2">
                        <div>
                            <label className='block font-mono' htmlFor="grid-first-name">Email</label>
                            <input 
                                className='block w-full py-2 px-3 text-gray-700 font-mono border border-gray-700 hover:border-custom_purple' 
                                id="email" 
                                type="text" 
                                placeholder="example@email.com"
                                onChange={() => setEmailError("")}
                            />
                            <h1>{emailError}</h1>
                        </div>
                        <div>
                            <label className='block font-mono' htmlFor="grid-last-name">Password</label>
                            <input 
                                className='block w-full py-2 px-3 text-gray-700 font-mono border border-gray-700 hover:border-custom_purple' 
                                id="password" 
                                type="password" 
                                placeholder="**********"
                                onChange={() => setPassError("")}
                            />
                            <h1>{passError}</h1>                        
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className='-z-100 relative w-full'>
                            <video className='-z-100' autoPlay muted playsInline src="/cardv6.webm" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-lg align-center py-2">
                <p className="text-center font-mono">By continuing, I acknowledge the <span className="font-bold text-custom_purple">Privacy Notice</span>
                    <br/>and agree to receive <span className="font-bold text-custom_purple">Electronic Disclosures.</span>
                </p>
            </div>
            <div className="flex flex-col items-center">
                <button className="uppercase border border-gray-700 hover:bg-gray-700 text-gray-700 hover:text-white font-mono py-2 px-10" type="submit">Create Account</button>
            </div>

        </form>
        </>
    )
}
