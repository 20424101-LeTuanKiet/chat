import { Button, Col, Row } from 'antd';
import classNames from 'classnames/bind';

import firebase, { auth } from '~/firebase/config';
import styles from './Login.module.scss';
import Title from 'antd/es/typography/Title';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
    const navigate = useNavigate();

    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    };

    auth.onAuthStateChanged((user) => {
        console.log({ user });
        if (user) {
            navigate('/');
        }
    });

    return (
        <>
            <Row justify="center" className={cx('wrapper')}>
                <Col span={8}>
                    <Title className={cx('title')} level={3}>
                        Chat Room
                    </Title>
                    <Button className={cx('login-btn')}>Đăng nhập bằng Google</Button>
                    <Button className={cx('login-btn')} onClick={handleFbLogin}>
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Login;
