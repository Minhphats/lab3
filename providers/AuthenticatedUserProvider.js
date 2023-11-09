import React, { useState, createContext } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthenticatedUserContext = createContext({});
export const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
        {children}
    </AuthenticatedUserContext.Provider>
    );
};