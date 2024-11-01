"use client"
import React from 'react'
import { MdOutlineSearch, MdNotifications, MdAccountCircle, MdEmail } from "react-icons/md"

type PropsTypes = {
    title: string
    placeholder?: string
    isSearchInput?: boolean
}

const Header = ({
    title, placeholder, isSearchInput = true
}: PropsTypes) => {
    return (
        <section className='flex-between bg-white py-4 px-6'>
            <section className="flexx space-x-10">
                <h2 className='text-lg font-medium text-gray-700'>
                    {title}
                </h2>
                {isSearchInput && (
                    <div className='flexx space-x-2 w-[450px] rounded-[100px] border border-gray-200 px-4'>
                        <MdOutlineSearch className='text-2xl text-gray-500'/>
                        <input 
                            type="text" 
                            placeholder={placeholder} 
                            className='flex-1 border-none ring-0 focus:ring-0 outline-none bg-transparent'/>
                    </div>
                )}
            </section>
            <section className='flexx space-x-5'>
                <MdNotifications className='text-2xl text-gray-600 cursor-pointer'/>
                <MdEmail className='text-2xl text-gray-600 cursor-pointer'/>
                <MdAccountCircle className='text-2xl text-gray-600 cursor-pointer'/>
            </section>  
        </section>
    )
}

export default Header