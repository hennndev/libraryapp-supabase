"use client"
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { FaUsers } from "react-icons/fa6"
import { usePathname } from 'next/navigation'
import { RiInboxUnarchiveFill } from "react-icons/ri"
import { MdDashboard, MdLibraryBooks,MdOutlineRepeat, MdPrint, MdSettings, MdLogout  } from "react-icons/md"



const Sidebar = () => {
    const pathname = usePathname().replace('/', '')

    return (
        <aside className='w-[250px] bg-[#86AB89] flex flex-col sticky h-screen top-0 py-3 pb-10'>
            <h1 className='text-xl font-playwrite text-center font-bold text-white'>Monster Library</h1>

            <section className="flex-1 flex justify-between flex-col mt-10 px-5">
                <section className='flex flex-col space-y-3'>
                    <Link href='/dashboard' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none'>
                        <MdDashboard className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Dashboard
                    </Link>
                    <Link href='/books-collection' className={clsx('group flexx text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none', pathname === 'books-collection' ? 'bg-[#F1F8E8] text-gray-700' : 'text-white')}>
                        <MdLibraryBooks className={clsx('text-2xl mr-2 group-hover:text-gray-700', pathname === 'books-collection' ? 'text-gray-700' : 'text-white')}/>
                        Koleksi Buku
                    </Link>
                    <Link href='/members' className={clsx('group flexx text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none', pathname === 'members' ? 'bg-[#F1F8E8] text-gray-700' : 'text-white')}>
                        <FaUsers className={clsx(' text-2xl mr-2 group-hover:text-gray-700', pathname === 'members' ? 'text-gray-700' : 'text-white')}/>
                        Keanggotaan
                    </Link>
                    <Link href='/books-borrowing' className={clsx('group flexx text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none', pathname === 'books-borrowing' ? 'bg-[#F1F8E8] text-gray-700' : 'text-white')}>
                        <RiInboxUnarchiveFill className={clsx('text-2xl mr-2 group-hover:text-gray-700', pathname === 'books-borrowing' ? 'text-gray-700' : 'text-white')}/>
                        Peminjaman
                    </Link>
                    <Link href='/books-returning' className={clsx('group flexx text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none', pathname === 'books-returning' ? 'bg-[#F1F8E8] text-gray-700' : 'text-white')}>
                        <MdOutlineRepeat className={clsx('text-2xl mr-2 group-hover:text-gray-700', pathname === 'books-returning' ? 'text-gray-700' : 'text-white')}/>
                        Pengembalian
                    </Link>
                    <Link href='/reports' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none'>
                        <MdPrint className='text-white text-2xl mr-2 group-hover:text-gray-700'/>
                        Laporan
                    </Link>
                    <Link href='/settings' className='group flexx text-white text-base hover:bg-[#F1F8E8] hover:text-gray-700 px-6 py-2 rounded-xl outline-none'>
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