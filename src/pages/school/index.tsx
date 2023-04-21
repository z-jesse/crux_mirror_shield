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
    <>
    <div className="grow bg-defgray">
        <div className="max-w-7xl mx-auto">
            <h1 className="uppercase font-condensed font-bold text-8xl text-white">
                For Schools.
            </h1>
            <p className="font-mono text-gold">
                Whether you&#39;re a K-12 private school, community college, or a four-year university, Crux has a solution for you.
            </p>
        </div>
    </div>
    </>
  )
}
