import React from 'react'
import Link from 'next/link'
import { BsSortUp } from "react-icons/bs"
import { RiFilterFill } from "react-icons/ri"
import moment from 'moment'

const Members = () => {

    moment.locale('id')

    return (
        <section className='flex-1 py-10 px-5'>
            <div className='flex-end space-x-3 mb-5'>
                <div className='bg-white w-[48px] h-[50px] rounded-md flex-center'>
                    <BsSortUp className='text-gray-600 text-2xl'/>
                </div>
                <div className='bg-white w-[48px] h-[48px] rounded-md flex-center'>
                    <RiFilterFill className='text-gray-600 text-2xl'/>
                </div>
                <Link href='/books-borrowing/add-book-borrowing' className='outline-none border-none bg-blue-500 text-white rounded-md py-3 px-5'>
                    Pinjam buku
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
                                Judul buku
                            </th>
                            <th scope="col" className="px-6 py-4">
                                ISBN
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Peminjam
                            </th>
                            <th scope="col" className="px-6 py-4">
                                NIM
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Tenggat pengembalian
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
                            <td className="px-6 py-4 w-[250px]">
                                Pemrograman Mobile Edisi II
                            </td>
                            <td className="px-6 py-4">
                                000111222
                            </td>
                            <td className="px-6 py-4">
                                Zulfa Aulia H
                            </td>
                            <td className="px-6 py-4">
                                002233445
                            </td>
                            <td className="px-6 py-4 font-semibold">
                               {moment('2024-11-1').format("D MMMM YYYY")}
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
                            <td className="px-6 py-4 w-[250px]">
                                Pemrograman Desktop Edisi I
                            </td>
                            <td className="px-6 py-4">
                                000111222
                            </td>
                            <td className="px-6 py-4">
                                Hendr Adri PP
                            </td>
                            <td className="px-6 py-4">
                                044254264
                            </td>
                            <td className="px-6 py-4 text-red-500 font-semibold">
                                {moment('2024-10-31').format("D MMMM YYYY")}
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
                                3
                            </th>
                            <td className="px-6 py-4 w-[250px]">
                                Jaringan Komputer Edisi II
                            </td>
                            <td className="px-6 py-4">
                                000111222
                            </td>
                            <td className="px-6 py-4">
                                Roro Jonggrang
                            </td>
                            <td className="px-6 py-4">
                                044555666
                            </td>
                            <td className="px-6 py-4 text-green-500 font-semibold">
                                {moment('2024-10-31').format("D MMMM YYYY")}
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
    )
}

export default Members