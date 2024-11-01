import React from 'react'
import Header from '@/app/components/dashboard/Header'
import MemberForm from '@/app/components/dashboard/MemberForm'

const AddMember = () => {
    return (
        <section className='flex flex-1 flex-col'>
            <Header title='Tambah anggota' isSearchInput={false}/>
            <section className='flex-1 py-10 px-5'>
                <MemberForm/>
            </section>
        </section>
    )
}
export default AddMember