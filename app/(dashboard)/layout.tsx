import React from 'react'
import Sidebar from '@/app/components/dashboard/Sidebar'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='bg-[#D8EFD3] min-h-screen'>
            <section className="flex">
                <Sidebar/>
                {children}
            </section>
        </main>
    )
}
export default DashboardLayout