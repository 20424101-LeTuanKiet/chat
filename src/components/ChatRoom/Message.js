import { Avatar, Typography } from 'antd';

import classNames from 'classnames/bind';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);

function Message({ text, displayName, createAt, photoURL }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Avatar size="small" src={photoURL}>
                    {photoURL ? '' : displayName.charAt(0).toUpperCase()}
                </Avatar>
                <Typography.Text className={cx('author')}>{displayName}</Typography.Text>
                <Typography.Text className={cx('date')}>{createAt}</Typography.Text>
            </div>
            <div>
                <Typography.Text className={cx('content')}>{text}</Typography.Text>
            </div>
        </div>
    );
}

export default Message;
