import React, { useEffect } from 'react'
import Router from 'next/router';

import { useSelector } from 'react-redux';
import type { RootState } from '../../../../state/store';

export default function Profile() {

    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!user.authenticated) {
            Router.push('/onboarding/login');
        }
    })

    return (
        <>
            <h1> Hello </h1>
            <h1> {user.email} </h1>
        </>
    )
}