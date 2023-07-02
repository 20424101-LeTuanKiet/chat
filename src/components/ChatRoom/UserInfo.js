import { Avatar, Button, Typography } from 'antd';

import { auth } from '~/firebase/config';
import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';
import { useContext } from 'react';

import { AuthContext } from '~/Context/AuthProvider';

const cx = classNames.bind(styles);

function UserInfo() {
    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);

    return (
        <div className={cx('wrapper')}>
            <div>
                <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className={cx('username')}>{displayName}</Typography.Text>
            </div>
            <Button onClick={() => auth.signOut()} ghost>
                Đăng xuất
            </Button>
        </div>
    );
}

export default UserInfo;
