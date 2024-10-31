import React from 'react'
import Sidebar from '@/app/components/dashboard/Sidebar'
import Header from '@/app/components/dashboard/Header'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='bg-[#D8EFD3] min-h-screen'>
            <section className="flex">
                <Sidebar/>
                <section className='flex flex-1 flex-col'>
                    <Header/>
                    {children}
                </section>
            </section>
        </main>
    )
}

export default DashboardLayout