import { SocialIcon } from "react-social-icons";

export default function Social() {
    return (
      <div className='flex flex-row gap-x-2'>
        <SocialIcon url="https://www.instagram.com/cruxrewards/" className="rounded-full hover:bg-white" target="_blank"/>
        <SocialIcon url="https://twitter.com/cruxrewards" className="rounded-full hover:bg-white" target="_blank"/>
        <SocialIcon url="https://www.linkedin.com/company/cruxrewards/" className="rounded-full hover:bg-white" target="_blank"/>
      </div>
    )
  }