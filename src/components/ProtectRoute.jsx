import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectRoute = ({children}) => {
    const {user} = UserAuth()

    if (!user){
        return <Navigate/>
    }else {
        return children
    }
 
}

export default ProtectRoute
