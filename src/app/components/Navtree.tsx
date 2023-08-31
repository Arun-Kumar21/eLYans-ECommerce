import React from 'react'
import Link from 'next/link'
import { TbShoe } from 'react-icons/tb'
import { FaShirt } from 'react-icons/fa6'
import { GiPoloShirt } from 'react-icons/gi'
import { GiSleevelessJacket } from 'react-icons/gi'


function Navtree() {
  return (
    <div>
        <div className='block md:hidden'>
            <div className='navTreeContainer fixed z-15 w-full h-[60px] bg-opacity-60 bottom-0 justify-between items-center bg-white   shadow-xl py-2'>
                <div className='px-3'>
                   <ul className='flex justify-between items-center'>
                        <li className='hover:bg-black hover:text-white rounded-full p-3'>
                            <Link href="/Shoes">
                                <TbShoe/>
                            </Link>
                        </li>

                        <li className='hover:bg-black hover:text-white rounded-full p-3'>
                            <Link href="/Tshirt">
                                <FaShirt/>
                            </Link>
                        </li>

                        <li className='hover:bg-black hover:text-white rounded-full px-3 py-2'>
                            <Link href="/">
                                <i className="ri-home-2-line"></i>
                            </Link>
                        </li>

                        <li className='hover:bg-black hover:text-white rounded-full p-3'>
                            <Link href="/Sweater">
                                <GiPoloShirt/>
                            </Link>
                        </li>

                        <li className='hover:bg-black hover:text-white rounded-full p-3'>
                            <Link href="/Jackets">
                                <GiSleevelessJacket/>
                            </Link>
                        </li>
                   </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navtree