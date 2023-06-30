import { Button, Collapse, Typography } from 'antd';
import { styled } from 'styled-components';
import classNames from 'classnames/bind';

import styles from './RoomList.module.scss';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const cx = classNames.bind(styles);
const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-expand-icon {
            color: white;
        }

        .ant-collape-header-text,
        span {
            color: white;
        }

        .ant-collapse-content-box {
            padding: 0 40px;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

function RoomList() {
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách phòng chat" key="1">
                <LinkStyled>Room 1</LinkStyled>
                <LinkStyled>Room 2</LinkStyled>
                <LinkStyled>Room 2</LinkStyled>
                <Button type="text" icon={<PlusCircleOutlined />} className={cx('create-room')}>
                    Tạo phòng
                </Button>
            </PanelStyled>
        </Collapse>
    );
}

export default RoomList;
