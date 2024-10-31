"use client"
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { GoDotFill } from "react-icons/go"
import loginImg from '@/app/assets/images/login-img.svg'

type PropsTypes = {
    children: React.ReactNode
    classes?: string
}

const AuthBox = ({children, classes}: PropsTypes) => {
    return (
        <section className={clsx('min-w-[900px] min-h-[500px] flex')}>
            <section className='flex-1 w-[450px] bg-[#86AB89] flex-center flex-col space-y-[30px]'>
                <div className='relative w-[250px] h-[250px]'>
                    <Image src={loginImg} fill alt='login-img' className='w-full h-full'/>
                </div>
                <section className='w-[350px] flex-center flex-col space-y-[8px] text-center'>
                    <h1 className='text-3xl font-bold text-white tracking-normal'>Welcome, kids!</h1>
                    <p className='text-[14px] text-white leading-[22px]'>Provide e-books for children about all think while your child can imagine.</p>
                </section>

                <div className='flexx space-x-[5px]'>
                    <GoDotFill className='text-white'/>
                    <GoDotFill className='text-[rgba(255,255,255,0.6)]'/>
                    <GoDotFill className='text-[rgba(255,255,255,0.6)]'/>
                    <GoDotFill className='text-[rgba(255,255,255,0.6)]'/>
                    <GoDotFill className='text-[rgba(255,255,255,0.6)]'/>
                </div>
            </section>
            {children}
        </section>
    )
}

export default AuthBox