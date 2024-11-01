import React from 'react'
import Header from '@/app/components/dashboard/Header'
import BorrowingBookForm from '@/app/components/dashboard/BorrowingBookForm'

const AddBookBorrowing = () => {
    return (
        <section className='flex flex-1 flex-col'>
            <Header title='Pinjam buku' isSearchInput={false}/>
            <section className='flex-1 py-10 px-5'>
                <BorrowingBookForm/>
            </section>
        </section>
    )
}

export default AddBookBorrowing