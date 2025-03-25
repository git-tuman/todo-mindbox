import { Button, Divider, Flex, Form, Input, Space, Typography } from "antd";
import "./App.css";
import {
  BorderOutlined,
  CaretDownOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const { Text } = Typography;

function FormTask() {
  const [form] = Form.useForm();

  const handleSubmit = (values: { todo: string }) => {
    console.log(values.todo);

    form.resetFields();
  };

  return (
    <>
      <Form form={form} onFinish={handleSubmit}>
        <Flex align="center" gap="small" style={{ padding: 10 }}>
          <Button
            htmlType="submit"
            color="default"
            variant="text"
            icon={<CaretDownOutlined style={{ fontSize: 20, color: "gray" }} />}
          />

          <Form.Item name="todo" style={{ flex: 1, marginBottom: 0 }}>
            <Input
              style={{
                padding: 0,
                width: "100%",
                fontSize: 20,
                color: "gray",
                borderRadius: 0,
              }}
              size="large"
              variant="borderless"
              placeholder="What needs to be done?"
            />
          </Form.Item>
        </Flex>
      </Form>

      <Divider style={{ margin: 0 }} />
    </>
  );
}

function App() {
  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Space
        direction="vertical"
        style={{
          backgroundColor: "rgb(240, 240, 240)",
          width: "50%",
          padding: 10,
        }}
      >
        <Title level={1} style={{ color: "gray" }}>
          todos
        </Title>

        <Space
          direction="vertical"
          style={{ width: "100%", backgroundColor: "white", gap: 0 }}
        >
          <FormTask />

          <Flex align="center" gap="small" style={{ padding: 10 }}>
            <Button
              color="default"
              variant="text"
              icon={<BorderOutlined style={{ fontSize: 20, color: "gray" }} />}
            />

            <Text style={{ fontSize: 20, color: "gray" }}>
              Тестовое задание
            </Text>
          </Flex>

          <Divider style={{ margin: 0 }} />

          <Flex align="center" gap="small" style={{ padding: 10 }}>
            <Button
              color="default"
              variant="text"
              icon={
                <CheckSquareOutlined style={{ fontSize: 20, color: "gray" }} />
              }
            />

            <Text style={{ fontSize: 20, color: "rgb(191, 191, 191)" }} delete>
              Прекрасный код
            </Text>
          </Flex>

          <Divider style={{ margin: 0 }} />

          <Flex
            justify="space-between"
            align="center"
            gap="small"
            style={{ padding: 10 }}
          >
            <Text
              style={{
                color: "gray",
                paddingTop: 1,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              1 items left
            </Text>

            <Flex gap="small">
              <Button
                color="default"
                variant="text"
                style={{ color: "gray" }}
                size="small"
              >
                All
              </Button>

              <Button
                color="default"
                variant="text"
                style={{ color: "gray" }}
                size="small"
              >
                Active
              </Button>

              <Button
                color="default"
                variant="text"
                style={{ color: "gray" }}
                size="small"
              >
                Completed
              </Button>
            </Flex>

            <Button
              color="default"
              variant="text"
              style={{ color: "gray" }}
              size="small"
            >
              Clear completed
            </Button>
          </Flex>
        </Space>
      </Space>
    </Flex>
  );
}

export default App;
