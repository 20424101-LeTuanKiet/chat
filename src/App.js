import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from '~/components/Login';
import ChatRoom from '~/components/ChatRoom';
import AuthProvider from '~/Context/AuthProvider';
import AppProvider from '~/Context/AppProvider';
import AddRoomModal from '~/components/Modals/AddRoomModal';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Routes>
                        <Route element={<Login />} path="/login" />
                        <Route element={<ChatRoom />} path="/" />
                    </Routes>
                    <AddRoomModal />
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
