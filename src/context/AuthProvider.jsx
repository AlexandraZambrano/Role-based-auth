//The idea is to make a context that retrieves the roles and use it in th requireAuth component, however it keep returning undefined at the first render

import { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useToken } from "./TokenProvider";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const { token } = useContext(useToken)

    const [userRole, setUserRole] = useState([])

    useEffect(() => {
        retrieveRoles()
      }, []);

      const retrieveRoles = () => {
        if (token) {
          const decoded = jwtDecode(token);
          const userRoles = decoded.roles;
          setUserRole(userRoles);
        }
        return userRole
      }

      console.log(userRole)
    
    return(
        <AuthContext.Provider value={{ userRole }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}