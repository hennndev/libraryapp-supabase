"use client"
import React from 'react'
import Link from 'next/link'
import { FaUsers } from "react-icons/fa6"
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { MdDashboard, MdLibraryBooks,MdOutlineRepeat, MdPrint, MdSettings, MdLogout  } from "react-icons/md"



const Sidebar = () => {
    return (
        <aside className='w-[250px] bg-[#86AB89] flex flex-col sticky h-screen top-0 py-3 pb-10'>
            <h1 className='text-xl font-playwrite text-center font-bold text-white'>Monster Library</h1>

            <section className="flex-1 flex justify-between flex-col mt-10 px-5">
                <section className='flex flex-col space-y-3'>
                    <Link href='/dashboard' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6    py-2 rounded-xl outline-none'>
                        <MdDashboard className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Dashboard
                    </Link>
                    <Link href='/books-collection' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6    py-2 rounded-xl outline-none'>
                        <MdLibraryBooks className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Koleksi Buku
                    </Link>
                    <Link href='/members' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6    py-2 rounded-xl outline-none'>
                        <FaUsers className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Keanggotaan
                    </Link>
                    <Link href='/books-borrowing' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6    py-2 rounded-xl outline-none'>
                        <RiInboxUnarchiveFill className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Peminjaman
                    </Link>
                    <Link href='/books-returning' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6    py-2 rounded-xl outline-none'>
                        <MdOutlineRepeat className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Pengembalian
                    </Link>
                    <Link href='/reports' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6    py-2 rounded-xl outline-none'>
                        <MdPrint className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Laporan
                    </Link>
                    <Link href='/settings' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6    py-2 rounded-xl outline-none'>
                        <MdSettings className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Setting
                    </Link>
                </section>
                <Link href='/dashboard' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none'>
                    <MdLogout  className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                    Logout
                </Link>
            </section>
        </aside>
    )
}

export default Sidebar