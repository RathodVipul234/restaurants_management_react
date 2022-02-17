import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = ({component:Cmp,...rest}) => (
    <Routes>
    <Route 
        {...rest} 
        render = {(props) => 
        localStorage.getItem('login')?(
            <Cmp {...props} />
        ):
        <Navigate to='/login' />
        }
    />
    </Routes>
)

export default ProtectedRoutes;