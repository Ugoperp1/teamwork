import React from 'react'
import vectorimg from '../Assets/vector.png'
import Footer from './Footer';


function Login() {
  return (
    <>
    <div name="log" className='grid grid-cols-1 sm:grid-cols-2'>
    <div className='hidden sm:block'>
        <img src={vectorimg} alt='' />
    </div>

    <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
            <h2 className='text-4xl font-bold text-left py-4 text-[#0c2e60]'>Login Account</h2>
            <h1 className='text-gray-400'>Please login to your account below.</h1>
            <div className='flex flex-col py-2'>
                <label>Email</label>
                <input className='border p-2' type='text ' placeholder='example@gmail.com' name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label>Password</label>
                <input className='border p-2' type='password' placeholder='Password' name='password' />

                <p><input type='checkbox' /> Remember Password</p>
                    </div>
                    <button className='border w-full my-5 py-2 text-white bg-[#fd7e14] hover:bg-slate-500 rounded-full'>Login</button>
                    <div className='flex justify-between'>
                        <p>Dont have an account?<span className='text-red-800'> Sign up now</span></p>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </>

  )
}

export default Login