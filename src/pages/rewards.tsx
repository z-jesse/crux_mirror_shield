export default function Rewards() {
  return (
    <>
    <div className="grow bg-defgray">
      <div className="h-[150px]"></div>
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col items-center mb-6">
          <h1 className="uppercase text-7xl font-condensed font-semibold text-gold">
            Point Rewards
          </h1>
        </div>
        <hr className="mb-6"></hr>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="flex flex-col w-full md:w-1/3 items-center m-4">
            <img className="rounded-full" src="/school.jpg" alt="Education"/>
            <p className="uppercase font-condensed font-bold text-gold text-5xl">Education</p>
          </div>
          <div className="flex flex-col w-full md:w-1/3 items-center m-4">
            <img className="rounded-full" src="/travel.jpg" alt="Travel"/>
            <p className="uppercase font-condensed font-bold text-gold text-5xl">Travel</p>
          </div>
          <div className="flex flex-col w-full md:w-1/3 items-center m-4">
            <img className="rounded-full" src="/shop.jpg" alt="Shopping"/>
            <p className="uppercase font-condensed font-bold text-gold text-5xl">Shopping</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
