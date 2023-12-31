import React, { useEffect } from 'react'
import {useRouter} from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { SIGNIN_USER } from '@/graphql/mutations/authentication';
import { GET_ACCOUNT_INFO } from '@/graphql/queries/account';

export default function Login() {
    const { loading: queryLoading, error: queryError, data: queryData } = useQuery(GET_ACCOUNT_INFO);
    const [signinUser, { data, loading, error }] = useMutation(SIGNIN_USER, {
        refetchQueries: [
          GET_ACCOUNT_INFO
        ],
      });
    const router = useRouter();

    function login(e :any) {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const credentials = {
            email: email,
            password: password
        }
        signinUser({ variables: { credentials }})
    }

    return (
        <form onSubmit={login}>
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

            <div className='flex justify-center items-center mb-3'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' type='submit'>Sign up</button>
            </div>
            <button onClick={() => router.push("/onboarding")}>Sign up here</button>
        </form>
    )
}
