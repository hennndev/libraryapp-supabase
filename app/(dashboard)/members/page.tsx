import React from 'react'
import Link from 'next/link'
import { BsSortUp } from "react-icons/bs"
import { RiFilterFill } from "react-icons/ri"
import Header from '@/app/components/dashboard/Header'

const Members = () => {
    return (
        <section className='flex flex-1 flex-col'>
            <Header title='Keanggotaan' placeholder='Cari anggota...'/>
            <section className='flex-1 py-10 px-5'>
                <div className='flex-end space-x-3 mb-5'>
                    <div className='bg-white w-[48px] h-[50px] rounded-md flex-center'>
                        <BsSortUp className='text-gray-600 text-2xl'/>
                    </div>
                    <div className='bg-white w-[48px] h-[48px] rounded-md flex-center'>
                        <RiFilterFill className='text-gray-600 text-2xl'/>
                    </div>
                    <Link href='/members/add-member' className='outline-none border-none bg-blue-500 text-white rounded-md py-3 px-5'>
                        Tambah anggota
                    </Link>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-4">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    NIM
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Prodi
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Semester
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Detail
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    Zulfa Aulia H
                                </td>
                                <td className="px-6 py-4">
                                    000111222
                                </td>
                                <td className="px-6 py-4">
                                    S1 Teknik Informatika
                                </td>
                                <td className="px-6 py-4">
                                    5
                                </td>
                                <td className="px-6 py-4">
                                    <button className='outline-none bg-transparent border border-gray-200 rounded-md py-2 px-3 text-sm'>Detail Anggota</button>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className='outline-none border-none bg-blue-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Edit
                                    </button>
                                    <button className='outline-none border-none bg-red-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Hendra Adriyanto PP
                                </td>
                                <td className="px-6 py-4">
                                    044254264
                                </td>
                                <td className="px-6 py-4">
                                    S1 Sistem Informasi
                                </td>
                                <td className="px-6 py-4">
                                    6
                                </td>
                                <td className="px-6 py-4">
                                    <button className='outline-none bg-transparent border border-gray-200 rounded-md py-2 px-3 text-sm'>Detail Anggota</button>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className='outline-none border-none bg-blue-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Edit
                                    </button>
                                    <button className='outline-none border-none bg-red-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Hendra Adriyanto PP
                                </td>
                                <td className="px-6 py-4">
                                    044254264
                                </td>
                                <td className="px-6 py-4">
                                    S1 Sistem Informasi
                                </td>
                                <td className="px-6 py-4">
                                    6
                                </td>
                                <td className="px-6 py-4">
                                    <button className='outline-none bg-transparent border border-gray-200 rounded-md py-2 px-3 text-sm'>Detail Anggota</button>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className='outline-none border-none bg-blue-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Edit
                                    </button>
                                    <button className='outline-none border-none bg-red-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Hendra Adriyanto PP
                                </td>
                                <td className="px-6 py-4">
                                    044254264
                                </td>
                                <td className="px-6 py-4">
                                    S1 Sistem Informasi
                                </td>
                                <td className="px-6 py-4">
                                    6
                                </td>
                                <td className="px-6 py-4">
                                    <button className='outline-none bg-transparent border border-gray-200 rounded-md py-2 px-3 text-sm'>Detail Anggota</button>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className='outline-none border-none bg-blue-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Edit
                                    </button>
                                    <button className='outline-none border-none bg-red-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Hendra Adriyanto PP
                                </td>
                                <td className="px-6 py-4">
                                    044254264
                                </td>
                                <td className="px-6 py-4">
                                    S1 Sistem Informasi
                                </td>
                                <td className="px-6 py-4">
                                    6
                                </td>
                                <td className="px-6 py-4">
                                    <button className='outline-none bg-transparent border border-gray-200 rounded-md py-2 px-3 text-sm'>Detail Anggota</button>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className='outline-none border-none bg-blue-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Edit
                                    </button>
                                    <button className='outline-none border-none bg-red-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Hendra Adriyanto PP
                                </td>
                                <td className="px-6 py-4">
                                    044254264
                                </td>
                                <td className="px-6 py-4">
                                    S1 Sistem Informasi
                                </td>
                                <td className="px-6 py-4">
                                    6
                                </td>
                                <td className="px-6 py-4">
                                    <button className='outline-none bg-transparent border border-gray-200 rounded-md py-2 px-3 text-sm'>Detail Anggota</button>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className='outline-none border-none bg-blue-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Edit
                                    </button>
                                    <button className='outline-none border-none bg-red-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Hendra Adriyanto PP
                                </td>
                                <td className="px-6 py-4">
                                    044254264
                                </td>
                                <td className="px-6 py-4">
                                    S1 Sistem Informasi
                                </td>
                                <td className="px-6 py-4">
                                    6
                                </td>
                                <td className="px-6 py-4">
                                    <button className='outline-none bg-transparent border border-gray-200 rounded-md py-2 px-3 text-sm'>Detail Anggota</button>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className='outline-none border-none bg-blue-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Edit
                                    </button>
                                    <button className='outline-none border-none bg-red-400 text-white rounded-md py-2 px-3 text-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    )
}

export default Members