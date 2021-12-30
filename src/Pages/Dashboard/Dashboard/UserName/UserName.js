import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const UserName = () => {
    const{user}=useAuth()
    return (
        <div>

            <h1>Welcome to  Deshboard {user?.displayName}</h1>
            
        </div>
    );
};

export default UserName;