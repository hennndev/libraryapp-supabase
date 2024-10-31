import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='bg-[#D8EFD3] min-h-screen'>
            {children}
        </main>
    )
}

export default AuthLayout