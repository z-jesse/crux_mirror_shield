export default function Card() {
  return (
    <>
    <div className="grow bg-black">
      <div className="container flex flex-col md:flex-row mx-auto">
        <div className="md:w-1/2 bg-gold">
          <video autoPlay muted loop src="/cruxcardv2.mp4"/>
        </div>
        <div className="flex md:w-1/2 items-center">
          <h1 className="uppercase text-white text-8xl font-condensed font-semibold">Introducing <br/>the <br/>Crux <br/>Card</h1>
        </div>
      </div>
    </div>
    <div className="bg-defgray p-6">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col items-center mb-6">
          <h2 className="uppercase text-5xl font-condensed font-semibold text-gold">A new generation of credit card</h2>
        </div>
        <hr className="mb-6"></hr>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-1/2">
            <p className="uppercase text-gold text-4xl font-bold font-condensed mb-6">16g of stainless steel.</p>
            <p className="uppercase text-gold text-4xl font-bold font-condensed mb-6">track your purchases and spending right on your phone.</p>
            <p className="uppercase text-gold text-4xl font-bold font-condensed mb-6">create virtual cards to protect your privacy.</p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="uppercase text-gold text-4xl font-bold font-condensed mb-6">zero liability fraud protection.</p>
            <p className="uppercase text-gold text-4xl font-bold font-condensed mb-6">tap to pay at any contactless card reader.</p>
            <p className="uppercase text-gold text-4xl font-bold font-condensed mb-6">no annual fee.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
