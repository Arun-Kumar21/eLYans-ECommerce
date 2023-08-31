'use client'

import React, { useContext } from 'react'

import Image from 'next/image'
import heroTshirt from 'public/HeroTshirt.jpg'


import { ToastContainer } from 'react-toastify';
import { CartContext } from '../Context/CartContext'

function Tshit() {

  const cartContext:any = useContext(CartContext);
  const addToCart = cartContext.addToCart;
  const showNotification = cartContext.showNotification;

  return (
    <div>


      <ToastContainer />

        <div className='mt-[10vh]'>
            <div className='relative'>
            <div className="heroSection m-5 ">
              <Image src={heroTshirt} alt='' className='rounded-md  w-[90vw] h-[60vh] md:h-[80vh] md:rounded-lg m-auto'/>
            </div>

            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-black w-[60%] md:w-[70vw] '>
            <h1 className='text-xl  text-white  p-5 heroTxt opacity-70 lg:text-5xl'>Get ready to sizzle this summer with the <br /> Hottest fashion trends</h1>
          </div>
            </div>
          
          <div className='heroTxt text-xl p-5'>
            <h1>Products:</h1>
          </div>

          <section className="text-gray-400 bg-white body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain  w-full h-full block" src="https://www.alphabroder.com/prodimg/hires/3001c_51_z.jpg"/>
                </a>
              
                <div className='flex items-center justify-between'>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Bella+Canvas</h3>
                    <p className="mt-1">$66.00</p>
                    <h2 className="title-font text-sm pt-1 text-black font-medium">T-Shirts</h2>
                  </div>

                  <div>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,66,'Bella+Canvas')
                    }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain  w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJK_tHLMettW4kwNNakVzDi6xtOpJlTcG0w&usqp=CAU"/>
                </a>
                <div className='flex items-center justify-between'>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">versace</h3>
                  <p className="mt-1">$41.15</p>
                  <h2 className="text-black title-font text-sm font-medium">T-Shirts</h2>
                </div>
                <div>
                  <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                    showNotification();
                    addToCart(1,41.15,'versace')
                  }}>Add to Cart</button>
                </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain w-full h-full block" src="https://sslimages.shoppersstop.com/sys-master/images/hbb/h3c/16536840142878/S21ADIGM3287RED_RED.jpg_2000Wx3000H"/>
                </a>
                <div className="flex items-center justify-between">
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">adidas Red Solid</h3>
                  <p className="mt-1">$32.00</p>
                  <h2 className="text-black title-font text-sm font-medium">T-Shirts</h2>
                </div>
                <div>
                  <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                    showNotification();
                    addToCart(1,32,'adidas Red Solid')
                  }}>Add to Cart</button>
                </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        </div> 
        </div>        
  )
}

export default Tshit