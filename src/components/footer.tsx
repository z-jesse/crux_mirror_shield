export default function Footer() {
  return (
    <div className="w-full md:h-48 bg-black">
      <div className="container flex flex-col md:flex-row h-full mx-auto py-8">
        <div className="w-1/4">
            <p className="font-mono text-white"> 2023 - CRUX </p>
            <p className="font-mono text-white"> CRUX is a financial technology company </p>
        </div>
        <div className="w-1/4">
            <p className="font-mono text-white"> COMPANY </p>
            <p className="font-mono text-white"> About </p> 
            <p className="font-mono text-white"> Careers </p>
            <p className="font-mono text-white"> Contact </p>
        </div>
        <div className="w-1/4">
            <p className="font-mono text-white"> LEGAL </p>
            <p className="font-mono text-white"> Privacy Policy </p> 
            <p className="font-mono text-white"> Terms of Use </p>
            <p className="font-mono text-white"> Disclosures </p>
        </div>
        <div className="w-1/4">
        <p className="font-mono text-white"> SOCIAL </p>
        <p className="font-mono text-white"> Youtube </p> 
        <p className="font-mono text-white"> Instagram </p>
        <p className=" font-mono text-white"> Linkedin </p>
        </div>
      </div>
    </div>
  )
}
