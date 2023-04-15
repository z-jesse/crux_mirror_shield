import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { default as axios } from 'axios';
import Template from './form/Template';

const stripe = await loadStripe('pk_test_51Mq09JGgHIEWiNv8Z1suoAsG5eNUX2LtbBFnHEfzsQOvQL12mZ1e6q2O8guInufw4asSW9fqiIZ35yMKsEG4lz6x00R5dlgfAm');

export default function CreateACH() {

    const [secret, setSecret] = useState("");

    useEffect(() => {
        async function fetchSecret() {
          axios.get(`http://localhost:3001/api/v1/payment/client-secret`, 
          { withCredentials: true }).then((res) => {
              setSecret(res.data.client_secret)
          })
        }
    
        fetchSecret(); 
    }, []);

    function createPaymentMethod(payment_method_id) {
        axios.post(`http://localhost:3001/api/v1/payment/create-ach-payment-method`, {payment_method_id: payment_method_id}, 
        { withCredentials: true }).then((res) => {
            console.log(res.data)
        })
    }

    function stripeStuff(e) {
        e.preventDefault();
        const accountHolderNameField = e.target.accountHolderNameField;
        const emailField = e.target.emailField;

        // Calling this method will open the instant verification dialog.
        stripe.collectBankAccountForSetup({
            clientSecret: secret,
            params: {
                payment_method_type: 'us_bank_account',
                payment_method_data: {
                    billing_details: {
                    name: accountHolderNameField.value,
                    email: emailField.value,
                    },
                },
            },
            expand: ['payment_method'],
        })
        .then(({setupIntent, error}) => {
            if (error) {
            console.error(error.message);
            // PaymentMethod collection failed for some reason.
            } else if (setupIntent.status === 'requires_payment_method') {
            // Customer canceled the hosted verification modal. Present them with other
            // payment method type options.
            } else if (setupIntent.status === 'requires_confirmation') {
            // We collected an account - possibly instantly verified, but possibly
            // manually-entered. Display payment method details and mandate text
            // to the customer and confirm the intent once they accept
            // the mandate.
            createPaymentMethod(setupIntent.payment_method.id)
            }
        });
    };

    return (
        <Template>
            <div className='h-[300px]'></div>
            <form id="payment-method-form" onSubmit={stripeStuff}>
            <div className='max-w-4xl mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='w-full px-3 mb-3 md:mb-4'>
                        <label className='block font-mono text-white' htmlFor="name">Name *</label>
                        <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="accountHolderNameField" type="text"/>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full px-3 mb-3 md:mb-4'>
                        <label className='block font-mono text-white' htmlFor="emailField">Email *</label>
                        <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="emailField" type="text" placeholder="example@cruxrewards.com"/>
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
                    <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' type='submit'>Setup Payment</button>
                </div>
            </div>
            </form>
            <div className='h-[500px]'></div>   
        </Template>
    )
}
