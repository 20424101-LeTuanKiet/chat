import { Button, Col, Row } from 'antd';
import classNames from 'classnames/bind';

import firebase, { auth } from '~/firebase/config';
import styles from './Login.module.scss';
import Title from 'antd/es/typography/Title';
import { addDocument, generateKeywords } from '~/firebase/services';
import { FacebookOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
    const handleFbLogin = async () => {
        const data = await auth.signInWithPopup(fbProvider);
        const { additionalUserInfo, user } = data;
        // console.log(additionalUserInfo);
        // console.log(user);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName),
            });
        }
    };

    return (
        <>
            <Row justify="center" align="middle" className={cx('wrapper')}>
                <Col xs={22} xl={8}>
                    <Title className={cx('title')} level={3}>
                        CHAT GROUP APP
                    </Title>
                    {/* <Button className={cx('login-btn')}>Đăng nhập bằng Google</Button> */}
                    <Button className={cx('login-btn')} onClick={handleFbLogin}>
                        Đăng nhập bằng Facebook <FacebookOutlined />
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Login;
