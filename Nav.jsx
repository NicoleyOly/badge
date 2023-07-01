"use client";

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'



const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    
    <nav className ="flex-between w-full mb-16 pt-3">
      <Link href="/hamburger" className="flex gap-2 flex-center">
      <Image src="/assets/badge/hamburger.png" 
alt="Hamburger Menu" 
width={75} 
height={90} 
className="object-contain "/>
        </Link>

       <Link href="/login" className="flex gap-2 flex-center"> <login-btn>Login Here</login-btn>
      </Link>
    </nav>
  )
}

export default Nav