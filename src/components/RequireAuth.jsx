import React, { useContext, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import { useToken } from '../context/TokenProvider'


function RequireAuth(Component) {

    const { token } = useContext(useToken)

  
    return (props) => {

        const decoded = jwtDecode(token);
        const userRoles = decoded.roles;
    
        if(!userRoles.includes("ROLE_ADMIN")) {
            return (
                <Navigate to="/unauthorized" replace />
            )
        }
    
        return <Component {...props} />

    }

}

export default RequireAuth
