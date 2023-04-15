import { useEffect, useState } from "react";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [tuitionHistory, setTuitionHistory] = useState([]);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    console.log("fetch_data")
    async function fetchProfile() {
      axios.get(`http://localhost:3001/api/v1/account/get-account-information/${localStorage.getItem("user_id")}`, 
      { withCredentials: true }).then((res) => {
          setEmail(res.data.email);
          setUserDetails(res.data.user_details);
          setTuitionHistory(res.data.tuition_history);
          setPhone(res.data.phone);
      })
    }

    fetchProfile(); 
  }, []);

  const transaction_elements = tuitionHistory.map((payment) => 
    <div className='bg-gold px-2 py-1 w-1/3' key={payment.id}>
      <p className='font-mono text-black'>Payment: {payment.amount} SchoolID: {payment.school_id}</p>
    </div>
  )

  return (
    <div className='grow bg-defgray'>
      <div className='h-[50px]'></div>
      <div className='container flex flex-col mx-auto'>
        <div className='flex flex-col justify-center'>
          <h1 className='uppercase font-condensed font-bold text-5xl text-gold mb-10'>
            Profile
          </h1>
        </div>
        
        <p className='font-mono text-white mb-4'>Name: {userDetails.first_name} {userDetails.last_name}</p>
        <p className='font-mono text-white mb-4'>Email: {email}</p>
        <p className='font-mono text-white mb-4'>Phone: {phone}</p>
        <div className='flex flex-col space-y-2 justify-center'>
          <p className='font-mono text-white mb-4'>Tuition History</p>
          {transaction_elements}
        </div>
      </div>
    </div>
  )
}
