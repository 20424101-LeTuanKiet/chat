import { Form, Input, Modal } from 'antd';
import { useContext } from 'react';
import { AppContext } from '~/Context/AppProvider';
import { AuthContext } from '~/Context/AuthProvider';
import { addDocument } from '~/firebase/services';

export default function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);

    const {
        user: { uid },
    } = useContext(AuthContext);
    // truy xuất dữ liệu từ form
    const [form] = Form.useForm();

    const handleOk = () => {
        // xữ lí logic...
        // thêm room mới vào firestore
        // console.log({ formData: form.getFieldValue() });
        addDocument('rooms', { ...form.getFieldValue(), members: [uid] });
        // reset dữ liệu của form
        form.resetFields();
        setIsAddRoomVisible(false);
    };

    const handleCancel = () => {
        setIsAddRoomVisible(false);
    };

    return (
        <>
            <Modal onOk={handleOk} onCancel={handleCancel} title="Tạo phòng" visible={isAddRoomVisible}>
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên phòng" name="name">
                        <Input placeholder="Nhập tên phòng"></Input>
                    </Form.Item>
                    <Form.Item label="Mô tả phòng" name="description">
                        <Input.TextArea placeholder="Nhập mô tả thông tin phòng"></Input.TextArea>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
