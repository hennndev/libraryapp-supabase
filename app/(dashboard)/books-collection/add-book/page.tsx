import React from 'react'
import Header from '@/app/components/dashboard/Header'
import BookForm from '@/app/components/dashboard/BookForm'

const AddBook = () => {
    return (
        <section className='flex flex-1 flex-col'>
            <Header title='Tambah koleksi buku' isSearchInput={false}/>
            <section className='flex-1 py-10 px-5'>
                <BookForm/>
            </section>
        </section>
    )
}

export default AddBook