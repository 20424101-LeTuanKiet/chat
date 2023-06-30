import { Avatar, Button, Typography } from 'antd';

import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';

const cx = classNames.bind(styles);

function UserInfo() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Avatar src={''} />
                <Typography.Text className={cx('username')}>LTK</Typography.Text>
            </div>
            <Button ghost>Đăng xuất</Button>
        </div>
    );
}

export default UserInfo;
