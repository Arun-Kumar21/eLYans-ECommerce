import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    <div>

        <div className='relative bg-black w-full h-[100%] pb-10'>
            <h1 className='footerLogo text-7xl px-6 py-14 
            text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent md:text-9xl'>eLYans</h1>

            <hr className='opacity-40'/>

            <p className='text-sm py-6 text-white opacity-50 px-5 md:text-xl  md:px-10'>Specialize in providing high-quality, stylish products for your wardrops</p>

            <hr className='opacity-30'/>

            <h3 className='text-sm py-6 text-white px-5 md:text-xl md:px-10 flex gap-3 items-center'>
                <p className='opacity-40 font-extralight'>Powered By</p>
                <Link href="/"> <strong className='text-xl md:text-2xl font-bold'>Vercel</strong></Link>
            </h3>

            <p className='absolute text-white opacity-30 bottom-[10px] left-[30px]'>
                © 2023 eLYans. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer