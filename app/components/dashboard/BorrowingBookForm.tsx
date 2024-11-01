"use client"
import React from 'react'
import moment from 'moment'

const BorrowingBookForm = () => {

    const defaultDate = moment().add(14, 'days').format('YYYY-MM-DD')

    return (
        <section className='flex flex-col space-y-6 bg-white rounded-md p-7'>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="memberName">Judul buku</label>
                <input type="text" placeholder='Input judul buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="memberNIM">NISBN buku</label>
                <input type="text" placeholder='Input NISBN buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">Nama peminjam</label>
                <input type="text" placeholder='Input nama peminjam...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">NIM peminjam</label>
                <input type="text" placeholder='Input NIM peminjam...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="date">Tenggat pengembalian buku</label>
                <input type="date" disabled defaultValue={defaultDate} className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
                <small className='text-sm text-gray-500 font-medium'>*Tenggat pengembalian 2 minggu</small>
            </div>
            <button className='w-full px-14 py-2 rounded-md bg-[#55AD9B] text-white font-medium text-base tracking-tight'>
                Submit
            </button>
        </section>
    )
}

export default BorrowingBookForm