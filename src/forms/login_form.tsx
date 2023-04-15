import Link from 'next/link';

export default function LoginForm(props: any) {

    function login(e: any) {
        e.preventDefault()

        // axios.post(`http://localhost:3001/api/v1/auth/login`, {
        //     email: e.target.email.value,
        //     password: e.target.password.value
        // }, { withCredentials: true }).then((res) => {
        //     props.handleLogin(res.data.user)
        //     window.location.replace("/dash")
        // })
    }

    return (
        <>
        {props.loggedIn && <h1>{props.userData.email}</h1>}
        <form className='w-full' onSubmit={login}>
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
            <div className='flex justify-center items-center mb-4'>
                <button className='uppercase bg-gold hover:bg-white text-black font-mono py-2 px-20' type='submit'>Log in</button>
            </div>
            <div className='flex justify-center items-center mb-4'>
                <Link href='/signup' className='text-white font-mono'>
                    New? <span className='text-gold'>Sign up <span aria-hidden="true">&rarr;</span></span>
                </Link>
            </div>
        </form>
        </>
    )
}
