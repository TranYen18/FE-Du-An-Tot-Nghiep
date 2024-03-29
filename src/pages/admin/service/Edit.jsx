
import React from 'react'
import { Typography } from 'antd';
import LayoutAdmin from "../../../../components/Layout/admin";
import { Button, Form, Input } from 'antd';
function EditService() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const { Title } = Typography;
    return (
        <div >
            <Title level={3}>Edit Service</Title>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Không bỏ trống trường này',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/(([0-9])\b)/g),
                            message: "Price không đúng định dạng!"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="desc"
                    rules={[
                        {
                            required: true,
                            message: 'Không bỏ trống trường này!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Edit Service
                    </Button>
                </Form.Item>
            </Form></div>
    )
}
EditService.Layout = LayoutAdmin;
export default EditService