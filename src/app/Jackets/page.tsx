"use client"

import React,{useContext} from 'react'


import Image from 'next/image'
import heroJackets from 'public/Herojackets.jpg'


import { ToastContainer } from 'react-toastify';
import { CartContext } from '../Context/CartContext'

function Jackets() {

  const cartContext:any = useContext(CartContext);
  const addToCart = cartContext.addToCart;
  const showNotification = cartContext.showNotification;

  return (
    <div>
      <ToastContainer/>

        <div className='mt-[10vh]'>
            <div className="heroSection m-5">
              <Image src={heroJackets} alt='' className=' relative rounded-md  w-[90vw] h-[60vh] md:h-[80vh] md:rounded-lg m-auto'/>
            </div>

            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-black w-[60%] md:w-[70vw] '>
            <h1 className='text-xl  text-white  p-10 heroTxt opacity-70 lg:text-7xl'>Explore the Winter Collection</h1>
          </div>

          <div className='heroTxt text-xl p-5'>
            <h1>Products:</h1>
          </div>

          <section className="text-gray-400 bg-white body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwad533fcb/images/hi-res/84212_FGE_VR1.jpg?sw=768&sh=768&sfrm=png&q=95&bgcolor=f5f5f5"/>
                </a>
                <div className="flex items-center justify-between">
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">patagonia</h3>
                    <p className="mt-1">$26.00</p>
                    <h2 className="title-font text-sm pt-1 text-black font-medium">Jacket</h2>
                  </div>

                  <div>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,26,'patagonia')
                    }}>Add to Cart</button>
                  </div>

                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain  w-full h-full block" src="https://www.bfgcdn.com/1500_1500_90/004-1557-1911/columbia-powder-lite-hooded-jacket-synthetic-jacket.jpg"/>
                </a>
                <div className='flex items-center justify-between'>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">culombia yak</h3>
                    <p className="mt-1">$31.15</p>
                    <h2 className="text-black title-font text-sm font-medium">Jacket</h2>
                  </div>

                  <div>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,31.15,'culombia yak')
                    }}>Add to Cart</button>
                  </div>

                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain w-full h-full block" src="https://www.backcountry.com/images/items/1200/MAR/MAR01V6/BOTGAR.jpg"/>
                </a>

              <div className='flex items-center justify-between'>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">marmot</h3>
                    <p className="mt-1">$42.00</p>
                    <h2 className="text-black title-font text-sm font-medium">Jacket</h2>
                  </div>

                  <div>
                  <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                    showNotification();
                    addToCart(1,42,'marmot')
                  }}>Add to Cart</button>
                  </div>

                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain  w-full h-full block" src="https://assets.peterglenn.com/jpg/1000x1000/78701_001_BLACK_LG.jpg"/>
                </a>
                <div className='flex justify-between items-center'>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">spyder</h3>
                    <p className="mt-1">$68.40</p>
                    <h2 className="text-black title-font text-sm font-medium">Jacket</h2>
                  </div>

                  <div>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,68.4,'spyder')
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

export default Jackets