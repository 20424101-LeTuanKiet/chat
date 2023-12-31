import { createContext, useContext, useMemo, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useFirestore from '~/hooks/useFirestore';

export const AppContext = createContext();

function AppProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');

    const {
        user: { uid },
    } = useContext(AuthContext);

    /**
     * {
     *  name: 'room name',
     *  description: 'mo ta',
     * members: [uid1, uid2,...]
     * }
     */

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);

    const rooms = useFirestore('rooms', roomsCondition);

    // lấy dữ liệu room đã chọn
    const selectedRoom = useMemo(() => rooms.find((room) => room.id === selectedRoomId) || {}, [rooms, selectedRoomId]);

    const membersCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom.members,
        };
    }, [selectedRoom.members]);

    // lấy dữ liệu user có trong room đã chọn
    const members = useFirestore('users', membersCondition);

    return (
        <AppContext.Provider
            value={{
                rooms,
                selectedRoom,
                members,
                isAddRoomVisible,
                setIsAddRoomVisible,
                isInviteMemberVisible,
                setIsInviteMemberVisible,
                selectedRoomId,
                setSelectedRoomId,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
