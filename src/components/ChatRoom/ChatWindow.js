import classNames from 'classnames/bind';
import styles from './ChatWindow.module.scss';
import { Alert, Avatar, Button, Form, Input, Tooltip } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';
import { styled } from 'styled-components';
import { useContext, useMemo, useState } from 'react';
import { AppContext } from '~/Context/AppProvider';
import { addDocument } from '~/firebase/services';
import { AuthContext } from '~/Context/AuthProvider';
import useFirestore from '~/hooks/useFirestore';
import { formatRelative } from 'date-fns';

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

    const {
        user: { uid, photoURL, displayName },
    } = useContext(AuthContext);

    const [inputValue, setInputValue] = useState('');

    const [form] = Form.useForm();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnSubmit = () => {
        addDocument('messages', {
            text: inputValue,
            uid,
            photoURL,
            displayName,
            roomId: selectedRoom.id,
        });

        form.resetFields(['message']);
    };

    const condition = useMemo(
        () => ({
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom.id,
        }),
        [selectedRoom.id],
    );

    const messages = useFirestore('messages', condition);

    function formatDate(seconds) {
        let formattedDate = '';
        if (seconds) {
            formattedDate = formatRelative(new Date(seconds * 1000), new Date());
            formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        }

        return formattedDate;
    }

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
                            {messages.map((mes) => (
                                <Message
                                    key={mes.id}
                                    text={mes.text}
                                    photoURL={mes.photoURL}
                                    displayName={mes.displayName}
                                    createAt={formatDate(mes.createAt?.seconds)}
                                />
                            ))}
                        </div>
                        <FormStyled>
                            <Form.Item form={form}>
                                <Input
                                    name="message"
                                    onChange={handleInputChange}
                                    onPressEnter={handleOnSubmit}
                                    placeholder="Nhập nội dung"
                                    bordered={false}
                                    autoComplete="off"
                                />
                            </Form.Item>
                            <Button type="dashed" onClick={handleOnSubmit}>
                                Gửi
                            </Button>
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
