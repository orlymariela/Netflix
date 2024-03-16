import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className='w-full h-screen'>
    <img className='absolute hidden sm:block w-full h-screen'
     src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
     alt='/'/>
     <div className='fixed bg-black/80 top-0 left-0 w-full h-screen'> </div>
        <div className='fixed w-full px-4 py-40 z-50'>
            <div className='max-w-[550px] h-[450px] mx-auto text-white flex flex-col items-center text-center'>
                    <h1 className='block text-6xl font-extrabold mb-2 pt-10 sm:text-5xl sm:pt-3'>Unlimited movies, TV shows, and more</h1>
                    <p className='text-2xl py-1'>Starts at ARS 2,499. Cancel anytime</p>
                    <p className='pt-5'><span className='text-gray-300'>Ready to watch? Enter your email to create or restart your membership.</span></p>
                    <div className='w-full pt-2 grid grid-flow-col gap-2'>
                        <input className='col-span-4 px-6 py-3 border border-gray-400 bg-black/50 rounded' type='email' placeholder='Email' autoComplete='email'/>
                        <Link to='/regform'>
                        <button className='col-span-2 px-6 py-3 left-1 bg-red-600 font-bold text-2xl cursor-pointer hover:bg-red-700 rounded'>Get Started</button>
                        </Link>
                    </div>
                    
                </div>
     </div>

  </div>
  )
}

export default Signup
