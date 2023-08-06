import React from "react";
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
            console.log("email empty");
            return false;
        }
        if (password.length < 8) {
            console.log("password must be minimum 8 characters");
            return false;
        }

        //valid email
        // if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(refinedEmail)) {
        //     console.log("email not valid")
        //     return false;
        // }
        return true;
    }

    return (
        <>
            <form onSubmit={registerUser}>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                        <label className='block font-mono text-white' htmlFor="grid-first-name">Email</label>
                        <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="email" type="text" placeholder="example@email.com"/>
                    </div>
                </div>

                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                        <label className='block font-mono text-white' htmlFor="grid-last-name">Password</label>
                        <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="password" type="password" placeholder="**********"/>
                    </div>
                </div>
                <button type="submit"> Create Account </button>
            </form>
        </>
    )
}
