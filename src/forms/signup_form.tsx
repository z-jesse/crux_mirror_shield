import Link from 'next/link';

export default function SignupForm() {

    function registerUser(e: any) {
        e.preventDefault()

        // axios.post(`http://localhost:3001/api/v1/onboarding/register_user`, {
        //     email: e.target.email.value,
        //     phone_number: e.target.phone.value,
        //     first_name: e.target.firstName.value, 
        //     last_name: e.target.lastName.value,
        //     password: e.target.password.value,
        //     dob: e.target.dob.value,
        // }).then((res: any) => {
        //     console.log(res.data)
        // })

        window.location.replace("/login")
    }

    return (
        <form onSubmit={registerUser}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">First Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="firstName" type="text" placeholder="Jane"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-last-name">Last Name *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="lastName" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-dob">Date of Birth *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="dob" type="date" placeholder="MM/DD/YYYY"/>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-phone">Phone Number *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="phone" type="tel" placeholder="(234) 567-8910"/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">Email *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="email" type="text" placeholder="example@cruxrewards.com"/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full px-3 mb-3 md:mb-4'>
                    <label className='block font-mono text-white' htmlFor="grid-first-name">Password *</label>
                    <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="password" type="password" placeholder="******************"/>
                </div>
            </div>
            <div className='flex justify-center items-center mb-3'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' type='submit'>Sign up</button>
            </div>
            <div className='flex justify-center items-center mb-3'>
                <Link href='/login' className='text-white font-mono'>
                    Existing user? <span className='text-gold'>Log in <span aria-hidden="true">&rarr;</span></span>
                </Link>
            </div>
        </form>
    )
}
