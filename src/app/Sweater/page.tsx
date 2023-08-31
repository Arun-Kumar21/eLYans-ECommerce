"use client"


import React,{useContext} from 'react'



import Image from 'next/image'
import herosweater from 'public/Herosweaters.jpg'

import { ToastContainer} from 'react-toastify';
import { CartContext } from '../Context/CartContext'

function Sweater() {

  const cartContext:any = useContext(CartContext);
  const addToCart = cartContext.addToCart;
  const showNotification = cartContext.showNotification;

  return (
    <div>

      <ToastContainer/>

        <div className='mt-[10vh]'>
        <div className='mt-[10vh]'>
        <div className='mt-[10vh]'>
            <div className="heroSection m-5">
              <Image src={herosweater} alt='' className=' relative rounded-md  w-[90vw] h-[60vh] md:h-[80vh] md:rounded-lg m-auto'/>
            </div>

            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-black w-[60%] md:w-[70vw] '>
            <h1 className='text-xl  text-white  p-5 heroTxt opacity-70 lg:text-5xl'>Wrap Yourself in Cozy Comfort – Discover the Perfect Sweater for Every Occasion</h1>
          </div>

          <div className='heroTxt text-xl p-5'>
            <h1>Products:</h1>
          </div>

          <section className="text-gray-400 bg-white body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain  w-full h-full block" src="https://slimages.macysassets.com/is/image/MCY/products/5/optimized/18271425_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1"/>
                </a>
                <div className='flex items-center justify-between'>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">sweaterHaven</h3>
                    <p className="mt-1">$66.00</p>
                    <h2 className="title-font text-sm pt-1 text-black font-medium">Sweater</h2>
                  </div>

                  <div>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,66,'sweaterHaven')
                    }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain  w-full h-full block" src="https://cdn.mall.adeptmind.ai/https%3A%2F%2Fcdn.francescas.com%2F29095-47722%2Fcms%2F47722%2Ffiles%2Fc7a0b163-3d4d-456e-b958-052aca0b2ea5%3FmaxWidth%3D700%26_mzcb%3D_1645074159260_large.jpg"/>
                </a>
                <div className='flex items-center justify-between'>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">francesca</h3>
                    <p className="mt-1">$41.15</p>
                    <h2 className="text-black title-font text-sm font-medium">Sweater</h2>
                  </div>

                  <div>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,41.15,'francesca')
                      }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzqd1dXUToeCjcD8HYDBWO4efWKmpieEByw&usqp=CAU"/>
                </a>
                <div className="flex items-center justify-between">
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">merino Wool</h3>
                    <p className="mt-1">$32.00</p>
                    <h2 className="text-black title-font text-sm font-medium">Sweater</h2>
                  </div>

                  <div>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,32,'merino Wool')
                    }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        </div> 
        </div> 
        </div>        
    </div>
  )
}

export default Sweater