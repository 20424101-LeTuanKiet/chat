import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '~/firebase/config';
import { Spin } from 'antd';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
                setIsLoading(false);
                navigate('/');
            } else {
                navigate('/login');
            }
        });

        //Clean func
        return () => {
            unsubscribed();
        };
    }, [navigate]);

    return <AuthContext.Provider value={{ user }}>{isLoading ? <Spin /> : children}</AuthContext.Provider>;
}

export default AuthProvider;
