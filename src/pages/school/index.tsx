import FormLayout from "@/components/form_layout";
import { useState } from "react";

export default function School() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentName, setPaymentName] = useState('');
  const [routing, setRouting] = useState(0);
  const [account, setAccount] = useState(0);

  function apiCall() {
    // axios.post(`http://localhost:3001/school/v1/onboarding/register-school`, {
    //     name: name,
    //     address: address,
    //     phone: phone,
    //     payment_name: paymentName,
    //     routing: routing,
    //     account: account,
    // }).then((res) => {
    //     console.log(res.data)
    // })
  }

  return (
    <FormLayout>
      <div className="h-[150px]"></div>
      <div className='max-w-4xl mx-auto'>
          <form className="w-full">
              <div className='flex flex-wrap'>
                  <div className='w-full px-3 mb-3 md:mb-4'>
                      <label className='block font-mono text-white'>Name *</label>
                      <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                          type="text"
                          value={name}
                          onChange = {(e) => setName(e.target.value)}
                      />
                  </div>
              </div>
              <div className='flex flex-wrap'>
                  <div className='w-full px-3 mb-3 md:mb-4'>
                      <label className='block font-mono text-white'>Address *</label>
                      <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                          type="text"
                          value={address}
                          onChange = {(e) => setAddress(e.target.value)}
                      />
                  </div>
              </div>
              <div className='flex flex-wrap'>
                  <div className='w-full px-3 mb-3 md:mb-4'>
                      <label className='block font-mono text-white'>Phone *</label>
                      <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                          type="text"
                          value={phone}
                          onChange = {(e) => setPhone(e.target.value)}
                      />
                  </div>
              </div>
              <div className='flex flex-wrap'>
                  <div className='w-full px-3 mb-3 md:mb-4'>
                      <label className='block font-mono text-white'>Payable To *</label>
                      <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                          type="text"
                          value={paymentName}
                          onChange = {(e) => setPaymentName(e.target.value)}
                      />
                  </div>
              </div>
              <div className='flex flex-wrap'>
                  <div className='w-full px-3 mb-3 md:mb-4'>
                      <label className='block font-mono text-white'>Routing Number *</label>
                      <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                          type="number"
                          value={routing}
                          onChange = {(e) => setRouting(Number(e.target.value))}
                      />
                  </div>
              </div>
              <div className='flex flex-wrap'>
                  <div className='w-full px-3 mb-3 md:mb-4'>
                      <label className='block font-mono text-white'>Account Number *</label>
                      <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' 
                          type="number"
                          value={account}
                          onChange = {(e) => setAccount(Number(e.target.value))}
                      />
                  </div>
              </div>
          </form>
          <div className='flex justify-center items-center mb-4'>
              <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' 
                onClick={apiCall}>
                  Submit
              </button>
          </div>
      </div>
    </FormLayout>
  )
}
