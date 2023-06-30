import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from '~/components/Login';
import ChatRoom from '~/components/ChatRoom';
import AuthProvider from '~/Context/AuthProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<Login />} path="/login" />
                    <Route element={<ChatRoom />} path="/" />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
