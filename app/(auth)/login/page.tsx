import React from 'react'
import AuthBox from '@/app/components/auth/AuthBox'
import SigninForm from '@/app/components/auth/SigninForm'

const LoginPage = () => {
    return (
        <section className='flex-center min-h-screen'>
            <AuthBox>
                <SigninForm/>
            </AuthBox>
        </section>
    )
}

export default LoginPage