export default function WaitlistForm() {
  return (
    <form>
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
        <div className='w-full px-3 mb-3 md:mb-4'>
          <label className='block font-mono text-white' htmlFor="grid-first-name">Email *</label>
          <input className='block w-full py-2 px-3 bg-gray-200 text-gray-700 font-mono' id="email" type="text" placeholder="example@cruxrewards.com"/>
        </div>
      </div>
      <div className='flex justify-center items-center mb-3'>
        <button className='uppercase border border-white hover:bg-white text-white hover:text-black font-mono py-2 px-20' type='submit'>Join waitlist</button>
      </div>
    </form>
  )
}
