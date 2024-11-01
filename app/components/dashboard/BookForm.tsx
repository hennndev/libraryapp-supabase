"use client"
import React from 'react'

const BookForm = () => {
    return (
        <section className='flex flex-col space-y-6 bg-white rounded-md p-7'>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="memberName">Judul buku</label>
                <input type="text" placeholder='Input judul buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="memberNIM">ISBN</label>
                <input type="number" placeholder='Input ISBN buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">Author</label>
                <input type="text" placeholder='Input author buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">Tahun</label>
                <input type="number" placeholder='Input tahun buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">Penerbit</label>
                <input type="text" placeholder='Input penerbit buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="description">Deskripsi singkat buku</label>
                <textarea rows={8} placeholder='Input deskripsi singkat buku...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <button className='w-full px-14 py-2 rounded-md bg-[#55AD9B] text-white font-medium text-base tracking-tight'>
                Submit
            </button>
        </section>
    )
}

export default BookForm