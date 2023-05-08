import React, { useEffect } from "react";
import Router from "next/router";
import { GET_ACCOUNT_INFO } from "@/graphql/mutations/account";
import { useQuery } from "@apollo/client";

import BasicCard from "@/components/dashboard/BasicCard";
import BigCard from "@/components/dashboard/BigCard";
import BlueCard from "@/components/dashboard/BlueCard";
import CreditCard from "@/components/dashboard/CreditCard";
import GreenCard from "@/components/dashboard/GreenCard";
import RewardsCard from "@/components/dashboard/RewardsCard";
import SmallCard from "@/components/dashboard/SmallCard";
import Image from "next/image";

export default function Dashboard() {
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery(GET_ACCOUNT_INFO);

  useEffect(() => {
    if (!queryLoading) {
      if (!queryData.getAccountInfo) {
        Router.push("/onboarding/login");
      } else {
        if (queryData.getAccountInfo.status === "ONBOARDING") {
            Router.push('/onboarding/user-details')
        }
      }
    }
  })

  if (queryLoading) {
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
          <p className='uppercase font-condensed text-4xl text-white'>
            Good Evening {queryData.getAccountInfo.email}
          </p>
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

