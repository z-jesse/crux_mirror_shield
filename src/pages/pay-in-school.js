import React, {useState} from "react";
import "../style.css";

import { default as axios } from 'axios';
import Template from "../components/form/Template";

function PayInNetworkTuition(props) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [school, setSchool] = useState(0);

    function apiCall() {
        console.log(props.userData)
        axios.post(`http://localhost:3001/api/v1/payment/pay-in-network-tuition`, {
            name: name,
            amount: amount,
            user_id: props.userData.id,
            school_id: school
        }, { withCredentials: true }).then((res) => {
            console.log(res.data)
        })
    }

    function getUserInformation() {
        axios.get(`http://localhost:3001/api/v1/auth/get_user_session`, { withCredentials: true }).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <Template>
            <div className='max-w-4xl mx-auto'>
            <form>
                <div className='flex flex-wrap'>
                    <div className='w-full px-3 mb-3 md:mb-4'>
                        <label className='block font-mono text-white'>School Name *</label>
                        <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                            type="text"
                            value={name}
                            onChange = {(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full px-3 mb-3 md:mb-4'>
                        <label className='block font-mono text-white'>Amount *</label>
                        <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                            type="text"
                            value={amount}
                            onChange = {(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full px-3 mb-3 md:mb-4'>
                        <label className='block font-mono text-white'>School ID *</label>
                        <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                            type="text"
                            value={school}
                            onChange = {(e) => setSchool(e.target.value)}
                        />
                    </div>
                </div>
            </form>
            <div className='flex justify-center items-center mb-4'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' onClick={apiCall}>Submit</button>
            </div>
            <div className='flex justify-center items-center mb-4'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' onClick={getUserInformation}>Get session</button>
            </div>
            </div>
        </Template>
    )
}

export default PayInNetworkTuition;