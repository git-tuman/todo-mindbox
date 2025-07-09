import { Button, Divider, Flex, Form, Input } from "antd";
import { useContext } from "react";
import { ACTION_TYPES, ERORS, INPUT_PLACEHOLDER } from "../constants";
import { PlusOutlined } from "@ant-design/icons";
import { StoreDispatch } from "../store/StoreContext";

function FormTask() {
    const [form] = Form.useForm();
    const dispatch = useContext(StoreDispatch);
    const formName = "formTask";

    const handleSubmit = () => {
        dispatch?.({
            type: ACTION_TYPES.ADD_TASK,
            payload: form.getFieldValue(formName),
        });

        form.resetFields();
    };

    return (
        <>
            <Form form={form} onFinish={handleSubmit}>
                <Flex align="center" gap="small" className="form-container">
                    <Button
                        htmlType="submit"
                        color="default"
                        variant="text"
                        className="btn-icon"
                        icon={<PlusOutlined />}
                    />

                    <Form.Item
                        name={formName}
                        rules={[
                            { required: true, message: ERORS.ENTER_TASK },
                            { min: 5, message: ERORS.MIN_CHARACTERS },
                        ]}
                        validateTrigger="onSubmit"
                        className="form-input-container"
                    >
                        <Input
                            size="large"
                            variant="borderless"
                            placeholder={INPUT_PLACEHOLDER}
                            className="form-input raleway-input"
                        />
                    </Form.Item>
                </Flex>
            </Form>

            <Divider className="divider" />
        </>
    );
}

export default FormTask;
