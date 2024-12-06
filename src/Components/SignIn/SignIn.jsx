import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { PiEyeSlash } from "react-icons/pi";
import SignUp from '../SignUp/SignUp';
import { motion } from "motion/react";

const SignIn = ({ isOpenSignIn }) => {
    const [openPassword, setOpenPassword] = useState(false);
    const [changePage, setChangePage] = useState(false);

    // Hàm toggle tắt/mở mật khẩu
    const handleOpenPassword = () => {
        setOpenPassword(!openPassword);
    };

    // Hàm chuyển trang giữa Sign In và Sign Up
    const handleChangePage = () => {
        setChangePage(!changePage);
    };

    return (
        isOpenSignIn && (
            <>
                {!changePage ? (
                    <motion.div 
                        // initial={{opacity: 0, scale: 0.5}}
                        // animate={{opacity: 1, scale: 1}}
                        className='fixed left-1/2 -translate-x-1/2 top-[20%] bg-primary text-white rounded-2xl w-[360px]'>
                        <h1 className='text-2xl font-bold text-center py-3'>Sign In</h1>
                        <form className='flex flex-col gap-4 px-4'>
                            <div className='flex flex-col gap-y-3'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='w-full h-[28px] rounded-[4px] px-2 py-4 outline-none text-black'
                                />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label htmlFor="password">Password</label>
                                <div className='relative'>
                                    <input
                                        type={openPassword ? "text" : "password"}
                                        placeholder='Password'
                                        className='w-full h-[28px] rounded-[4px] px-2 py-4 outline-none text-black'
                                    />
                                    {openPassword
                                        ? <PiEyeSlash
                                            className='absolute right-1 top-1/2 -translate-y-1/2 text-black cursor-pointer hover:scale-105'
                                            onClick={handleOpenPassword}
                                        />
                                        : <AiOutlineEye
                                            className='absolute right-1 top-1/2 -translate-y-1/2 text-black cursor-pointer hover:scale-105'
                                            onClick={handleOpenPassword}
                                        />}
                                </div>
                            </div>
                        </form>
                        <div className='flex items-center justify-center mt-6'>
                            <button
                                className='bg-secondary rounded-[4px] text-xs px-2 py-3 cursor-pointer hover:bg-secondary/50 font-semibold'>
                                Create Account
                            </button>
                        </div>
                        <p className='text-center py-4'>Or Sign In with</p>
                        <div className='flex items-center justify-center gap-4'>
                            <FaInstagram className='text-xl cursor-pointer hover:text-secondary' />
                            <FaSquareFacebook className='text-xl cursor-pointer hover:text-secondary' />
                            <FaGithubSquare className='text-xl cursor-pointer hover:text-secondary' />
                            <AiFillGoogleSquare className='text-xl cursor-pointer hover:text-secondary' />
                        </div>
                        <p className='text-center pt-2 pb-8'>
                            Don't have an account? {" "}
                            <a
                                href="#"
                                className='font-bold hover:text-secondary'
                                onClick={handleChangePage}
                            >
                                Sign Up
                            </a>
                        </p>
                    </motion.div>
                ) : (
                    <SignUp
                        handleChangePage={handleChangePage}
                        openPassword={openPassword}
                        handleOpenPassword={handleOpenPassword}
                    />
                )}
            </>
        )
    );
};

export default SignIn;
