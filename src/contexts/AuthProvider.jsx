import React from 'react';
import { AuthContext } from './AuthContext';
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';
const auth = getAuth(app)

const AuthProvider = ({children}) => {


    const userInfo ={
        name: 'nobin',
        roll: 123456
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;