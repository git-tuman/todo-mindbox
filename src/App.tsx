import { Button, Divider, Flex, Form, Input, Space, Typography } from "antd";
import "./App.css";
import {
  BorderOutlined,
  CheckSquareOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { useContext, useMemo } from "react";
import StoreProvider, { StoreContext, StoreDispatch, Task } from "./Store";
import { Store } from "antd/es/form/interface";

const { Text } = Typography;

function FormTask() {
  const [form] = Form.useForm();
  const dispatch = useContext(StoreDispatch);

  const handleSubmit = () => {
    console.log(form.getFieldValue("formTask"));

    dispatch?.({ type: "ADD_TASK", payload: form.getFieldValue("formTask") });

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
            icon={<PlusOutlined style={{ fontSize: 20, color: "gray" }} />}
          />

          <Form.Item
            name="formTask"
            style={{ flex: 1, marginBottom: 0 }}
            rules={[
              { required: true, message: "Enter the task!" },
              { min: 5, message: "Minimum 5 characters!" },
            ]}
            validateTrigger="onSubmit"
          >
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

function DefaultBtnInMenu({
  name,
  callback,
}: {
  name: string;
  callback: (name: Store["filter"]) => void;
}) {
  return (
    <Button
      color="default"
      variant="text"
      style={{ color: "gray" }}
      size="small"
      onClick={() => callback(name)}
    >
      {name}
    </Button>
  );
}

function CountItemsLeft() {
  const store = useContext(StoreContext);

  const count = useMemo(
    () => store?.tasks.filter((task) => !task.completed).length,
    [store?.tasks]
  );

  return (
    <Text
      style={{
        color: "gray",
        paddingTop: 1,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      {`${count} items left`}
    </Text>
  );
}

function Menu() {
  const dispatch = useContext(StoreDispatch);

  const handleChangeFilter = (name: Store["filter"]) => {
    dispatch?.({ type: "CHANGE_FILTER", payload: name });
  };

  const handleClearCompleted = () => {
    dispatch?.({ type: "CLEAR_COMPLETED" });
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      gap="small"
      style={{ padding: 10 }}
    >
      <CountItemsLeft />

      <Flex gap="small">
        <DefaultBtnInMenu name="All" callback={handleChangeFilter} />

        <DefaultBtnInMenu name="Active" callback={handleChangeFilter} />

        <DefaultBtnInMenu name="Completed" callback={handleChangeFilter} />
      </Flex>

      <DefaultBtnInMenu
        name="Clear completed"
        callback={handleClearCompleted}
      />
    </Flex>
  );
}

function TaskList() {
  const store = useContext(StoreContext);
  const dispatch = useContext(StoreDispatch);

  if (store?.tasks.length === 0) {
    return (
      <>
        <div
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "gray",
            }}
          >
            Здесь появятся задачи.
          </Text>
        </div>

        <Divider style={{ margin: 0 }} />
      </>
    );
  }

  function handleToggleTask(id: number) {
    dispatch?.({ type: "TOGGLE_TASK", payload: id });
  }

  function filterTasks() {
    switch (store?.filter) {
      case "All":
        return store.tasks;
      case "Active":
        return store.tasks.filter((task) => !task.completed);
      case "Completed":
        return store.tasks.filter((task) => task.completed);
    }
  }

  const list: Task[] | undefined = filterTasks();

  return (
    <>
      {list &&
        list.map((task: Task) => (
          <div key={task.id}>
            <Flex align="center" gap="small" style={{ padding: 10 }}>
              <Button
                color="default"
                variant="text"
                icon={
                  task.completed ? (
                    <CheckSquareOutlined
                      style={{ fontSize: 20, color: "gray" }}
                    />
                  ) : (
                    <BorderOutlined style={{ fontSize: 20, color: "gray" }} />
                  )
                }
                onClick={() => handleToggleTask(task.id)}
              />

              <Text
                style={{
                  fontSize: 20,
                  color: task.completed ? "rgb(191, 191, 191)" : "gray",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </Text>
            </Flex>

            <Divider style={{ margin: 0 }} />
          </div>
        ))}
    </>
  );
}

function App() {
  return (
    <StoreProvider>
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

            <TaskList />

            <Menu />
          </Space>
        </Space>
      </Flex>
    </StoreProvider>
  );
}

export default App;
