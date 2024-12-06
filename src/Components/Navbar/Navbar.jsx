import React, { useState } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { IoCloseOutline } from "react-icons/io5";
import ResponsiveMenu from './ResponsiveMenu';
import SignIn from '../SignIn/SignIn';
export const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "#",
    },
    {
      id: 3,
      title: "About Us",
      link: "#",
    },
    {
      id: 4,
      title: "Our Team",
      link: "#",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "#",
    },
];

const Navbar = () => {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const handleSignIn = () => {
    setIsOpenSignIn(!isOpenSignIn);
  }
  return (
    <nav className='relative z-[200] flex'>
      <motion.div 
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          className="container py-10 flex justify-between items-center">
            {/* Logo section */}
            <a href="#">
                <h1 className='font-bold text-2xl'>The Coding Vnboi</h1>
            </a>
            {/* Menu section */}
            <div className='hidden lg:block'>
                <ul className='flex gap-3 items-center'>
                    {
                        NavbarMenu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.link} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                                    <div className='w-2 h-2 bg-secondary rounded-full absolute mt-4 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                                    {menu.title}
                                </a>
                                
                            </li>
                        ))
                    }
                    <button className='primary-btn' onClick={handleSignIn}>Sign In</button>
                </ul>
            </div>
            {/* Mobile section */}
            <div className='lg:hidden' onClick={handleOpenMenu}>
              {isOpenMenu ? <IoCloseOutline  className='text-4xl'/> : <IoMenuOutline className='text-4xl'/>}
            </div>
      </motion.div>
        {/* Responsive Mobile Menu */}
      <ResponsiveMenu isOpenMenu={isOpenMenu}/>
      <SignIn isOpenSignIn={isOpenSignIn}/>
    </nav>
  )
}

export default Navbar
