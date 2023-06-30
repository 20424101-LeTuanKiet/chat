import classNames from 'classnames/bind';
import styles from './ChatWindow.module.scss';
import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';
import { styled } from 'styled-components';

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
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header__info')}>
                    <p className={cx('header__title')}>Room 1</p>
                    <span className={cx('header__description')}>Day la room 1</span>
                </div>
                <div className={cx('header__group')}>
                    <Button className={cx('header__group__button')} icon={<UserAddOutlined />} type="text">
                        Mời bạn
                    </Button>
                    <Avatar.Group size="smaill" maxCount={2}>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="B">
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="C">
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title="D">
                            <Avatar>D</Avatar>
                        </Tooltip>
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
        </div>
    );
}

export default ChatWindow;
