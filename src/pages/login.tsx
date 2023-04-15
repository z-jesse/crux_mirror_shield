import FormLayout from "@/components/form_layout";
import LoginForm from "@/forms/login_form";

export default function Login(props: any) {
  return (
    <FormLayout>
        <div className='h-[150px]'></div>
        <div className='flex flex-col items-center'>
            <h1 className='uppercase font-condensed font-bold text-6xl text-gold'>
                Login
            </h1>
        </div>
        <LoginForm handleLogin={props.handleLogin} loggedIn={props.loggedIn} userData={props.userData}/>
    </FormLayout>
  )
}
