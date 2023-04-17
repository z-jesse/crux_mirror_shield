import React, { useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { initUser } from '../../../../state/slices/userSlice';
import type { RootState } from '../../../../state/store';

export default function Login() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (user.authenticated) {
            if (!("status" in user.user) || user.user.status === "onboarding") {
                Router.push('/onboarding/user-details')
            } else {
                Router.push("/dashboard/profile");
            }
        }
    })

    function login(e :any) {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        axios.post(`http://localhost:3001/api/v1/auth/login`, {
            email: email,
            password: password,
        }, { withCredentials: true } ).then((res) => {
            if (res.data.status === "success") {
                dispatch(initUser());
                //dispatch(updateUserState({authenticated: true}))
            }
            Router.push("/dashboard/profile");
        })
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
        </form>
    )
}
