import React from 'react';
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'> 
        <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
            <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'>The Coding Journey</h1>
                <p className='text-dark2'> 
                    TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced 
                    programming concepts, we provide a comprehensive learning experience designed to help you master 
                    coding skills, build projects, and launch your tech career.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>Courses</h1>
                    <div className='text-dark2'>
                        <ul className='space-y-2 text-lg'>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Web Development</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Software Development</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Apps Development</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>E-learning</li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>Links</h1>
                    <div className='text-dark2'>
                        <ul className='space-y-2 text-lg'>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Home</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Services</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>About</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'>Get In Touch</h1>
                <div className='flex items-center'>
                    <input type="text" placeholder='Enter your email' className='p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2'/>
                    <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl'>Go</button>
                </div>
                <div className='flex space-x-6 py-3'>
                    <a href="https://www.facebook.com/profile.php?id=100069228433671">
                        <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a>
                    <a href="https://github.com/Vnboi2004">
                        <FaGithubAlt className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a> 
                    <a href="https://www.instagram.com/phuochung_4/">
                        <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a>
                    <a href="https://www.youtube.com/@phuochungtruong7430">
                        <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer
