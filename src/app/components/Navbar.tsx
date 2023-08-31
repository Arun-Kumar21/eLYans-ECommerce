
import Link from 'next/link'
import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext'

function Navbar() {

    const cartContext:any = useContext(CartContext);
    

  return (
    <div>
        <nav className='w-full h-[10vh] flex justify-between items-center fixed z-10 top-0 bg-white bg-opacity-60'>
            <div className='nav_logo text-2xl opacity-60 p-4 hover:text-white hover:bg-black hover:opacity-100 mx-2 lg:text-4xl'>
                <Link href='/'>eLYans</Link>
            </div>

            <div className='hidden md:flex md:p-4'>
                <ul className='flex gap-8'>
                    <li>
                        <Link href="/Shoes" className='hover:underline'>Shoes</Link>
                    </li>
                    <li>
                        <Link href='/Tshirt' className='hover:underline' >T-Shirts & Tanks</Link>
                    </li>
                    <li>
                        <Link href="/Sweater" className='hover:underline'>Sweaters</Link>
                    </li>
                    <li>
                        <Link href="/Jackets" className='hover:underline' >Jackets</Link>
                    </li>
                </ul>
            </div>
                
            <div className='text-2xl relative px-3 py-1 me-5 flex bg-black rounded items-center gap-1 cursor-pointer'>
                <Link href="/Cart">
                    <i className="ri-inbox-fill text-white font-2xl"></i>
                </Link>
                <span className='text-white text-base'>
                    {cartContext.NosOfQuantityCart}
                </span>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar