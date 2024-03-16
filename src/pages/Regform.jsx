import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FcHighPriority } from "react-icons/fc";

const Regform = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError]= useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await signUp(email, password);
            navigate('/')

        } catch (error){
            console.log(error)
            setError(error.message)
        }
    }
    return (
        <div className='w-full h-screen bg-white'>
            <div className='fixed top-0 left-0 w-full h-screen'> </div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[600px] h-[450px] mx-auto text-gray-900'>
                    <div className='max-w-[460px] mx-auto py-10'>
                        <h1 className='text-3xl font-bold'>Create a password to start your membership</h1>
                        <p className='pt-1'>Just a few more steps and you're done!
                        <br/>
                            We hate paperwork, too.</p>
                            {error ? <p className='p-1 my-3'>
                            <FcHighPriority />{error}</p> : null}
                        <form onSubmit={handleSubmit} 
                        className='w-full flex flex-col py-4'>
                            <input 
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-3 my-2 border border-gray-700 rounded' type='email' placeholder='Email' autoComplete='email' required />
                            <input
                            onChange={(e) => setPassword(e.target.value)}
                             className='p-3 my-2 border border-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' required />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold text-white text-2xl'>Next</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Regform
