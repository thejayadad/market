'use client'

import React, {useState} from 'react'
import Box from './Box';
import Link from "next/link";

const Navbar = () => {
    const [modbileMenu, setMobileMenu]= useState(false);
    const [show, setShow] = useState("translate-y-0")
  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticy top-0 transition-transform duration-300 ${show}`}>
        <Box>
            <Link href="/">
            <img
            src='/logo.png' className='w-[80px]' alt='logo'/>
            </Link>
        </Box>
    </header>
  )
}

export default Navbar