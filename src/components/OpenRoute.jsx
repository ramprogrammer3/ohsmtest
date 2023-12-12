import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const OpenRoute = ({children}) => {
    const {user} = useSelector((state)=>state.user);
    console.log("User",user)

    if(!user){
        return children
    }else{
        return <Navigate to={"/addbusiness"} />
    }
  
}

export default OpenRoute
