import Social from "./social";

export default function Footer() {
  return (
    <div className="w-full md:h-44 bg-black">
      <div className="flex flex-col md:flex-row max-w-7xl h-full mx-auto py-8 px-4 space-y-2">
        <div className="w-full md:w-1/3 space-y-2">
          <p className="font-mono text-white">2023 - Crux Rewards</p>
          <Social />
        </div>
        <div className="w-full md:w-1/3 space-y-2">
          <p className="font-mono text-white hover:underline">Terms & Conditions</p>
          <p className="font-mono text-white hover:underline">Privacy Policy</p> 
          <p className="font-mono text-white hover:underline">Help & Support</p>
        </div>
        <div className="w-full md:w-1/3 space-y-2">
          <p className="font-mono text-white hover:underline">Contact Us</p>
          <p className="font-mono text-white hover:underline">About</p> 
          <p className="font-mono text-white hover:underline">Careers</p>
        </div>
      </div>
    </div>
  )
}
