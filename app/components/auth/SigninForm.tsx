"use client"
import React from 'react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc"

const SigninForm = () => {
    return (
        <section className='flex-1 p-10 bg-white'>
            <h1 className='text-2xl font-playwrite text-center font-bold text-[#55AD9B]'>Monster Library</h1>
            <p className='text-gray-500 text-center mt-8 tracking-wide text-sm'>Hi, welcome again</p>

            <section className="flex-center mt-8">
                <form className='w-[300px] flex flex-col space-y-5'>
                    <section className='flex flex-col border-b border-gray-200'>
                        <label htmlFor="email" className='text-sm text-gray-500'>Email</label>
                        <input type="text" placeholder='Input your email' className='border-none outline-none text-gray-500 py-3 text-sm'/>
                    </section>
                    <section className='flex flex-col border-b border-gray-200'>
                        <label htmlFor="password" className='text-sm text-gray-500'>Password</label>
                        <input type="text" placeholder='Input your email' className='border-none outline-none text-gray-500 py-3 text-sm'/>
                    </section>
                    <div className='flex-end'>
                        <Link href='#' className='text-xs hover:underline text-gray-400 -mt-2'>Forgot Password?</Link>
                    </div>
                    <div className="flex-center">
                        <button className='w-full px-14 py-2 rounded-[100px] bg-[#55AD9B] text-white font-medium text-sm tracking-tight'>Sign in</button>
                    </div>
                    <div className='!mt-10'>
                        <div className='border-b border-1.5 border-gray-100'></div>
                        <p className='text-center text-[12px] text-gray-400 py-2 px-8 bg-white -mt-4 w-max mx-auto'>Or</p>
                    </div>
                    <div className="flex-center">
                        <button className='flexx text-gray-700 text-sm font-medium tracking-tight'>
                            <FcGoogle className='text-2xl mr-[10px]'/>
                            Sign with Google
                        </button>
                    </div>
                    <div className='flex-center text-center !mt-10'>
                        <p className='text-[13px] text-gray-400'>New at Monster Library? <Link href='/register' className='text-[#55AD9B] pb-0.5 border-b border-[#55AD9B]'>Create Account</Link></p>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default SigninForm