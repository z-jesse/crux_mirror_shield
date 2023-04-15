import FormLayout from "@/components/form_layout";
import WaitlistForm from "@/forms/waitlist_form";

export default function Waitlist() {
  return (
    <FormLayout>
      <div className="h-[150px]"></div>
      <div className='container flex flex-col max-w-4xl md:flex-row mx-auto'>
        <div className='md:w-1/2'>
          <h1 className='uppercase font-condensed font-bold text-6xl text-gold'>
            Waitlist
          </h1>
          <p className='font-mono text-white'>
            Be the first to hear about exclusive offers and updates from Crux.
          </p>
        </div>
        <div className='md:w-1/2'>
          <WaitlistForm />
        </div>
      </div>
    </FormLayout>
  )
}
