"use client"

import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import WatchImage from 'public/Watches.jpg'
import LandingPage from './components/LandingPage'

export default function Home() {

  const NavData = {
    name : ['Shoes', 'T-Shirt', 'Sweater', 'Jackets'],
    link : ['/Shoes', '/Tshirt', '/Sweater', '/Jackets']
  }

  return (
    <>

      <div className='hidden md:block'>
        <div className='w-[100vw] relative p-10 h-full mt-[10vh]'>
          <Image src={WatchImage} alt='' className=' relative rounded-md  w-full h-[60vh] md:h-[80vh] md:rounded-lg' />

          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-black w-[60%] md:w-[70vw] '>
            <h1 className='text-2xl  text-white  p-5 heroTxt opacity-70 lg:text-6xl'>Explore Your Favourite Collection</h1>
          </div>
        </div>
      </div>



      <div className='mt-[10vh] block md:hidden'>
        <LandingPage />
      </div>

      <div className='hidden md:block'>
        <div>
            {NavData.name.map((item, index) => (
              <>
                <div className='bg-black p-5 w-full h-[20vh] items-center flex cursor-pointer'>
                <Link href={NavData.link[index]} key={index}>
                  <h1 className='text-4xl text-white heroTxt'>{item}</h1> 
                </Link>
                </div>
                <hr />
              </>
            ))}
        </div>
      </div>
    </>
  )
}
