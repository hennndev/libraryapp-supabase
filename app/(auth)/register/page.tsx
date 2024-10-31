import React from 'react'
import AuthBox from '@/app/components/auth/AuthBox'
import SignupForm from '@/app/components/auth/SignupForm'

const RegisterPage = () => {
    return (
        <section className='flex-center min-h-screen'>
            <AuthBox classes='w-[1200px]'>
                <SignupForm/>
            </AuthBox>
        </section>
    )
}

export default RegisterPage