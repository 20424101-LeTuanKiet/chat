import { Button, Collapse, Typography } from 'antd';
import { styled } from 'styled-components';
import classNames from 'classnames/bind';

import styles from './RoomList.module.scss';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AppContext } from '~/Context/AppProvider';

const { Panel } = Collapse;

const cx = classNames.bind(styles);
const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-expand-icon {
            color: white;
        }

        .ant-collape-header-text,
        span {
            color: white;
        }

        .ant-collapse-content-box {
            padding: 0 40px;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

function RoomList() {
    // const {
    //     user: { uid },
    // } = useContext(AuthContext);

    // /**
    //  * {
    //  *  name: 'room name',
    //  *  description: 'mo ta',
    //  * members: [uid1, uid2,...]
    //  * }
    //  */

    // const roomsCondition = useMemo(() => {
    //     return { fieldName: 'members', operator: 'array-contains', compareValue: uid };
    // }, [uid]);

    // const rooms = useFirestore('rooms', roomsCondition);

    // console.log({ rooms });

    const { rooms, setIsAddRoomVisible, setSelectedRoomId } = useContext(AppContext);

    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    };

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách phòng chat" key="1">
                {rooms.map((room) => (
                    <LinkStyled
                        key={room.id}
                        onClick={() => {
                            setSelectedRoomId(room.id);
                        }}
                    >
                        {room.name}
                    </LinkStyled>
                ))}
                <Button onClick={handleAddRoom} type="text" icon={<PlusCircleOutlined />} className={cx('create-room')}>
                    Tạo phòng
                </Button>
            </PanelStyled>
        </Collapse>
    );
}

export default RoomList;
