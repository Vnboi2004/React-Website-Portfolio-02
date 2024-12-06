import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import { div } from 'motion/react-client';
import { NavbarMenu } from './Navbar';

const ResponsiveMenu = ({ isOpenMenu }) => {
  return (
    <AnimatePresence mode='wait'>
      {
        isOpenMenu && (
            <>
                <motion.div 
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -100}}
                    transition={{duration: 0.3}}
                    className='absolute top-24 left-0 w-full h-screen z-[1000] lg:hidden px-4'>
                    <div className='text-xl font-semibold bg-primary rounded-3xl'>
                        <ul className='flex flex-col justify-center items-center gap-8 py-6'>
                            {
                                NavbarMenu.map((menu) => (
                                    <li key={menu.id}>
                                        <a href={menu.link} className='inline-block'>
                                            {menu.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* Login */}
                    </div>
                </motion.div>
                {/* <motion.div 
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -100}}
                    transition={{duration: 0.3}}
                    className=' z-[1000] absolute top-[4.9rem] right-7 w-0 h-0 
                    border-l-[28px] border-l-transparent border-r-[10px] border-r-transparent border-b-primary border-b-[22px]'>
                </motion.div> */}
            </>
        )
      }
    </AnimatePresence>
  )
}

export default ResponsiveMenu
