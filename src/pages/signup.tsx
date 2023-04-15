import FormLayout from "@/components/form_layout";
import SignupForm from "@/forms/signup_form";

export default function Signup() {
  return (
    <FormLayout>
      <div className="h-[150px]"></div>
      <div className='flex flex-col items-center'>
        <h1 className='uppercase font-condensed font-bold text-6xl text-gold'>
          Sign Up
        </h1>
      </div>
      <SignupForm />
    </FormLayout>
  )
}
