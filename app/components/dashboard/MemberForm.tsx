"use client"
import React from 'react'

const MemberForm = () => {
    return (
        <section className='flex flex-col space-y-6 bg-white rounded-md p-7'>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="memberName">Nama anggota</label>
                <input type="text" placeholder='Input nama anggota...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="memberNIM">NIM</label>
                <input type="text" placeholder='Input nim anggota...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">Prodi</label>
                <input type="text" placeholder='Input prodi anggota...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">Semester</label>
                <input type="text" placeholder='Input prodi anggota...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="member">Alamat</label>
                <textarea rows={8} placeholder='Input prodi anggota...' className='border border-gray-300 ring-0 focus:border-gray-300 focus:ring-0 outline-none rounded-md'/>
            </div>
            <button className='w-full px-14 py-2 rounded-md bg-[#55AD9B] text-white font-medium text-base tracking-tight'>
                Submit
            </button>
        </section>
    )
}

export default MemberForm