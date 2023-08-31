import React from 'react'
import Link from 'next/link'

function LandingPage() {

  return (
    <div>
      <div className='homeHeadline text-3xl w-full p-5'>
      <h1 className='w-[60vw]'>Elevate Your Style with Our Exquisite Wardrobe Collection</h1>

      <h3 className='text-xl font-[400] w-full mt-3 p-3 bg-black text-white rounded-lg'> Discover Timeless Elegance and Modern Trends</h3>
      </div>

      <div className='text-2xl font-[600] opacity-60 px-10 py-4'>
          <h1>Featured Products</h1>
      </div>
      <div className='w-full p-5 itemCard flex flex-col gap-5 relative h-[100vh] orgin-center'>
          <div className='featuredItems absolute w-[90vw] h-[20vh] bg-[#f093fb] rounded-xl top-5 shadow-lg'>
            <Link href="/Shoes" className='w-full h-full text-white text-4xl flex justify-center items-center'>Shoes</Link>
          </div>
          <div className='featuredItems absolute w-[90vw] h-[20vh] bg-[#f6d365] rounded-xl top-[25vh] shadow-lg'>
            <Link href='/Tshirt' className='w-full h-full text-white text-4xl flex justify-center items-center'>T-Shirts</Link>
          </div>
          <div className='featuredItems absolute w-[90vw] h-[20vh] bg-[#5ee7df] rounded-xl top-[50vh] shadow-lg'>
            <Link href='/Sweater' className='w-full h-full text-white text-4xl flex justify-center items-center'>Sweaters</Link></div>
          <div className='featuredItems absolute w-[90vw] h-[20vh] bg-[#c3cfe2] rounded-xl top-[75vh] shadow-lg'>
          <Link href='/Jackets' className='w-full h-full text-white text-4xl flex justify-center items-center'>Jackets</Link>
          </div>
      </div>
    
      <h1 className='heroTxt text-3xl opacity-75 px-5 py-2'>About Us</h1>

      <div className='p-5'>
        <div className='p-3 bg-black w-full h-full rounded-lg shadow-lg'>
          <h1 className='text-xl heroTxt text-white cursor-pointer'>Hello 😁</h1>
        </div>

        <p className='p-5'>At the dawn of the internet age, we embarked on a journey to redefine fashion retail. <br/> Welcome to eLYans, where our eCommerce story begins.</p>

        <p className='px-5'>It is Just a small project that developed for education purpose.</p>

        <p className="bg-red-400 p-2 text-white shadow-lg mt-3 rounded-lg">No products are sold or bought here, but ideas, experiences, and connections flourish.</p>
      </div>

    </div>
  )
}

export default LandingPage