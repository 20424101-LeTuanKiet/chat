import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <Row className={cx('wrapper')}>
            <Col span={24}>
                <UserInfo />
            </Col>
            <Col span={24}>
                <RoomList />
            </Col>
        </Row>
    );
}

export default SideBar;
