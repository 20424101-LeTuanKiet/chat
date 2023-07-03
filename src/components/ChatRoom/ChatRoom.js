import { Row, Col } from 'antd';

import ChatWindow from './ChatWindow';
import SideBar from './Sidebar';

function ChatRoom() {
    return (
        <Row>
            <Col xs={10} xl={6}>
                <SideBar />
            </Col>
            <Col xs={14} xl={18}>
                <ChatWindow />
            </Col>
        </Row>
    );
}

export default ChatRoom;
