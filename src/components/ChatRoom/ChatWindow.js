import classNames from 'classnames/bind';
import styles from './ChatWindow.module.scss';
import { Alert, Avatar, Button, Form, Input, Tooltip } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';
import { styled } from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '~/Context/AppProvider';

const cx = classNames.bind(styles);

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgba(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

function ChatWindow() {
    const { selectedRoom, members, setIsInviteMemberVisible } = useContext(AppContext);

    return (
        <div className={cx('wrapper')}>
            {selectedRoom.id ? (
                <>
                    <div className={cx('header')}>
                        <div className={cx('header__info')}>
                            <p className={cx('header__title')}>{selectedRoom.name}</p>
                            <span className={cx('header__description')}>{selectedRoom.description}</span>
                        </div>
                        <div className={cx('header__group')}>
                            <Button
                                onClick={() => setIsInviteMemberVisible(true)}
                                className={cx('header__group__button')}
                                icon={<UserAddOutlined />}
                                type="text"
                            >
                                Mời bạn
                            </Button>
                            <Avatar.Group size="smaill" maxCount={2}>
                                {members.map((member) => (
                                    <Tooltip title={member.displayName} key={member.id}>
                                        <Avatar src={member.photoURL}>
                                            {member.photoURL ? '' : member.displayName.charAt(0)?.toUpperCase()}
                                        </Avatar>
                                    </Tooltip>
                                ))}
                            </Avatar.Group>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('message')}>
                            <Message text="test" photoURL={null} displayName="Kiet" createAt={112121212} />
                            <Message text="test" photoURL={null} displayName="Kiet" createAt={112121212} />
                            <Message text="test" photoURL={null} displayName="Kiet" createAt={112121212} />
                            <Message text="test" photoURL={null} displayName="Kiet" createAt={112121212} />
                        </div>
                        <FormStyled>
                            <Form.Item>
                                <Input placeholder="Nhập nội dung" bordered={false} autoComplete="off" />
                            </Form.Item>
                            <Button type="dashed">Gửi</Button>
                        </FormStyled>
                    </div>
                </>
            ) : (
                <Alert message="Chào mừng bạn đến với Chat Group App" type="info" style={{ margin: 5 }} />
            )}
        </div>
    );
}

export default ChatWindow;
