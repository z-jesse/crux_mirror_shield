import FormLayout from "@/components/form_layout";
import WaitlistForm from "@/forms/waitlist_form";

export default function Waitlist() {
  return (
    <FormLayout>
      {/* <div className="h-[100px]"></div> */}
      <div className='w-full'>
        {/* <div className='md:w-1/2'>
          <h1 className='uppercase font-condensed font-bold text-6xl text-gold'>
            Waitlist
          </h1>
          <p className='font-mono text-white'>
            Be the first to hear about exclusive offers and updates from Crux.
          </p>
        </div>
        <div className='md:w-1/2'>
          <WaitlistForm />
        </div> */}
        <iframe
          className="w-full h-[860px]"
          src="https://docs.google.com/forms/d/e/1FAIpQLScQ9glpkyfBr5amhLjG0k8rKlMnq2Fc5MJOnLgcmo6CNKTbqQ/viewform?embedded=true" 
          >
            Loading…
        </iframe>
      </div>
    </FormLayout>
  )
}
