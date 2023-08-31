"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { CartContext } from './Context/CartContext'
import React,{ useEffect, useState} from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navtree from './components/Navtree'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


const [cartItems, setCartItems] =  useState<{[key: string]: any}>({})
const [subTotal, setSubTotal] = useState(0)

const saveCart = (cart:any) => {
  localStorage.setItem('cart' , JSON.stringify(cart));
  let subT:any = 0;
  Object.keys(cart).map((key) => {
    subT += cart[key].qty * cart[key].price
  })

  subT = subT.toFixed(2)
  

  setSubTotal(subT)
}

const addToCart = ( qty:number , price:number, name:string) => {
  let cart:any = cartItems;
  if(name in cart){
    cart[name].qty += qty;
  }
  else{
    cart[name] = {name ,qty:1 , price}
  }

  setCartItems(cart)
  saveCart(cart)
}

const removeCart = (name:string) => {
    let cart:any = cartItems;
    delete cart[name]
    setCartItems(cart)
    saveCart(cart)
}


useEffect(() => {
  let cart = localStorage.getItem('cart')
  try {
    if(cart){
      setCartItems(JSON.parse(cart))
    } 
  } catch (error) {
    console.log(error);
    localStorage.clear
  }
}, [])

const showNotification = () => {
    toast.success('Item Added to Cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
      });
  }


const removeNotification = () => {
  toast.error('Item Removed from Cart', {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
    });
} 

const cartQuantity = () => {
  let nos = 0;
  Object.keys(cartItems).map((key) => {
    nos += cartItems[key].qty
  })
  return nos;
}


let NosOfQuantityCart = cartQuantity()

  return (
    <html lang="en">
      <head>
        <meta name="description" content="eLYans-Ecommerce is a website for selling wearables" />
        <title>eLYans-Ecommerce</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <CartContext.Provider value={{showNotification , removeNotification, cartItems ,  NosOfQuantityCart , setCartItems , addToCart , removeCart , subTotal}}>
            <Navbar />
            {children}
            <Navtree/>
            <Footer/>
       </CartContext.Provider>
        </body>
    </html>
  )
}
