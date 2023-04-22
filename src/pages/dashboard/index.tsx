import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import Router from "next/router";

import BasicCard from "@/components/dashboard/BasicCard";
import BigCard from "@/components/dashboard/BigCard";
import BlueCard from "@/components/dashboard/BlueCard";
import CreditCard from "@/components/dashboard/CreditCard";
import GreenCard from "@/components/dashboard/GreenCard";
import RewardsCard from "@/components/dashboard/RewardsCard";
import SmallCard from "@/components/dashboard/SmallCard";
import Image from "next/image";

export default function Dashboard() {

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user.authenticated) {
      Router.push("/onboarding/login");
    } else {
      if (!("status" in user.user) || user.user.status === "onboarding") {
          Router.push('/onboarding/user-details')
      }
    }
  })

  if (!("status" in user.user) || user.user.status !== "active") {
    return <h1> Loading </h1>
  }
  return (
    <div className='grow relative'>
      <Image 
        className="object-cover object-top"
        src="/north-cascades.jpg"
        alt="North Casdades"
        fill
      />
      
      <div className='container mx-auto relative'>
        
        <div className='flex justify-center'>
          <p className='uppercase font-condensed text-4xl text-white'>Good Evening, {"email" in user.user? user.user.email : "chicken"}.</p>
          <div className='h-[200px]'></div>
        </div>

        <div className='flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0'>
          <div className='flex flex-col w-full md:w-1/2 space-y-4'>
            <BasicCard />
            <CreditCard />
            <div className='flex flex-row space-x-4'>
              <div className='w-1/3'>
                <GreenCard />
              </div>
              <div className='w-1/3'>
                <BlueCard />
              </div>
              <div className='w-1/3'>
                <SmallCard />
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full md:w-1/2 space-y-4'>
            <RewardsCard />
            <BigCard />
          </div>
        </div>

      </div>
    </div>
  )
}

