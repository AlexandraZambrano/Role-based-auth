import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const useToken = createContext() 

function TokenProvider({children}) {

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    const findToken = () => {
        if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
            navigate("/home")
        } else {
            navigate("/login")
        }
    }

  return (
    <useToken.Provider value={{ findToken, token }}>
        {children}
    </useToken.Provider>
  )
}

export default TokenProvider

