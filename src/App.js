import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from '~/components/Login';
import ChatRoom from '~/components/ChatRoom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<ChatRoom />} path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
