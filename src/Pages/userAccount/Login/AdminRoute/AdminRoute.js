
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({children, ...rest}) => {
    const {user,isLoading,admin}=useAuth()
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
        render={({location})=>
            user.email && admin ? children
            : <Redirect
            to={{
                pathname:"/",
                state:{from:location}
            }}
                       
            ></Redirect>}
        >
            
        </Route>
    );
};

export default AdminRoute;