import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '~/firebase/config';
import { Spin } from 'antd';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);

        const unsubscribed = auth.onAuthStateChanged((user) => {
            if (location.pathname === '/policy-and-privacy') {
                setIsLoading(false);
                return;
            }

            if (user) {
                // console.log(user);
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
                setIsLoading(false);
                navigate('/');
                return;
            }

            navigate('/login');
            setIsLoading(false);
        });

        //Clean func
        return () => {
            unsubscribed();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? (
                <Spin style={{ justifyContent: 'center', alignItems: 'center', width: '100vh', height: '100vh' }} />
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
