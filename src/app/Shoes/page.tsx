'use client'

import React, { useContext } from 'react';

import { CartContext } from '../Context/CartContext';

import Image from 'next/image'
import heroShoes from 'public/HeroShoes.jpg'

import { ToastContainer} from 'react-toastify';

function Shoes() {

  const cartContext:any = useContext(CartContext);
  const addToCart = cartContext.addToCart;
  const showNotification = cartContext.showNotification;

  return (
    <div>


      <ToastContainer />

      <div className='mt-[10vh]'>

      <div className="banner relative w-full p-5">
          <Image src={heroShoes} alt='' className=' relative rounded-md  w-[90vw] h-[60vh] md:h-[80vh] md:rounded-lg m-auto'/>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-black w-[60%] h-[40vh] lg:h-[30vh] md:w-[70vw] '>
            <h1 className='text-xl  text-white  p-5 heroTxt opacity-70 lg:text-4xl'>Step into the world of elegance with shoes designed exclusively for individuals as exceptional as you.</h1>
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
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                </a>
                <div className="mt-4 flex justify-between item-center">
                  <div>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">nike Air max</h3>
                  <p className="mt-1">$16.00</p>
                  <h2 className="title-font text-sm pt-1 text-black font-medium">Shoes</h2>
                  </div>

                  <div className=''>
                    <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                      showNotification();
                      addToCart(1,16,'nike Air max')
                    }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                </a>
                <div className='flex items-center justify-between'>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">nike SportX</h3>
                  <p className="mt-1">$21.15</p>
                  <h2 className="text-black title-font text-sm font-medium">Shoes</h2>
                </div>

                <div className=''>
                    <button className='bg-black text-white p-2 rounded-md mt-2'  onClick={()=>{
                      addToCart(1,21.15,'nike SportX');
                      showNotification()
                    }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </a>
                <div className='flex items-center justify-between'>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">nike modern</h3>
                    <p className="mt-1">$12.00</p>
                    <h2 className="text-black title-font text-sm font-medium">Shoes</h2>
                  </div>
                  <div className=''>
                      <button className='bg-black text-white p-2 rounded-md mt-2'  onClick={()=>{
                        addToCart(1,12,'nike modern')
                        showNotification()
                      }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </a>
                <div className="flex items-center justify-between">
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">nike Hyper</h3>
                    <p className="mt-1">$18.40</p>
                    <h2 className="text-black title-font text-sm font-medium">Shoes</h2>
                  </div>

                  <div className=''>
                      <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                        addToCart(1,18.4,'nike Hyper')
                        showNotification()
                      }} >Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/4252951/pexels-photo-4252951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </a>
                <div className="flex justify-between items-center">
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">nike rainbow</h3>
                    <p className="mt-1">$16.00</p>
                    <h2 className="text-black title-font text-sm font-medium">Shoes</h2>
                  </div>
                  
                  <div className=''>
                      <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                        addToCart(1,16,'nike rainbow')
                        showNotification()
                        }}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </a>
                <div className="flex justify-between items-center">
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Reebok glance</h3>
                    <p className="mt-1">$21.15</p>
                    <h2 className="text-black title-font text-sm font-medium">Shoes</h2>
                  </div>
                  <div className=''>
                      <button className='bg-black text-white p-2 rounded-md mt-2' onClick={()=>{
                        addToCart(1,21.15,'Reebok glance')
                        showNotification()
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

export default Shoes