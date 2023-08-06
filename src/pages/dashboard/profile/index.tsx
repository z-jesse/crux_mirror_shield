import React, { useEffect, useState } from 'react'
import Router from 'next/router';
import {
    usePlaidLink,
    PlaidLinkOptions,
    PlaidLinkOnSuccess,
} from 'react-plaid-link';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import TuitionPortal from '@/components/payment/tuition_portal';

export default function Profile() {
    const [linkToken, setLinkToken] = useState("");

//     useEffect(() => {
//         if (!user.authenticated) {
//             Router.push('/onboarding/login');
//         } else {
//             if (user.user.status === "ONBOARDING") {
//                 Router.push('/onboarding/user-details')
//             } else {
//                 axios.post(`http://localhost:3001/api/v1/banking/create-link-token`, {
//                 }, { withCredentials: true } ).then((res) => {
//                     if (res.data.status === "success") {
//                         setLinkToken(res.data.link_token);
//                     }
//                 })
//             }
//         }
//     }, [])
    
//     function verifyIdentity() {
//     axios.post(`http://localhost:3001/api/v1/account/verify-identity`, {
//                 }, { withCredentials: true } ).then((res) => {
//                     console.log("identity verified")
//                 })}

//     if (user.user.status === "ONBOARDING") {
//         return <h1> Loading </h1>
//     } else {
//         return (
//             <>
//                 <h1> {user.user_detail.first_name} </h1>
//                 { linkToken && <BankAuthentication linkToken={linkToken}/> }
//                 <TuitionPortal user={user}/>
//                 <h1>{payment_methods.length}</h1>
//                 <button onClick={verifyIdentity}>Verify Identity</button>
//             </>
//         )
//     }
// }

// interface LinkProps {
//     linkToken: string | null;
// }

// function BankAuthentication(props: LinkProps) {
//     const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

//     function handleSuccess(public_token: string, metadata: any) {
//         axios.post(`http://localhost:3001/api/v1/banking/complete-bank-verification`, {
//             public_token: public_token,
//             metadata: metadata,
//         }, { withCredentials: true } ).then((res) => {
//             if (res.data.status === "success") {
//                 console.log(res.data)
//                 dispatch(fetchPaymentMethods());
//             }
//         })
//     }

//     const config: PlaidLinkOptions = {
//         onSuccess: (public_token, metadata) => {handleSuccess(public_token, metadata)},
//         token: props.linkToken,
//       };

//     const { open, ready } = usePlaidLink(config);

    return (
        <>
            <h1> hi</h1>
            {/* <button  className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' onClick={() => open()} disabled={!ready}>
                Link account
            </button> */}
        </>
    )
}