import { Button, Divider, Flex, Form, Input } from "antd";
import { addTask } from "../store/todosSlice";
import { ERORS, INPUT_PLACEHOLDER } from "../shared/constants";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

function FormTask() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formName = "formTask";

  const handleSubmit = () => {
    const value = form.getFieldValue("formTask");
    dispatch(addTask(value));
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
            aria-label="Add task"
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
