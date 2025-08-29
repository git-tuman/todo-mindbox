import FormTask from "./components/FormTask";
import TaskList from "./components/TaskList";
import Menu from "./components/Menu";
import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import { TODOS } from "./shared/constants";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Flex justify="center" align="center" className="wrapper">
        <Space direction="vertical" className="container">
          <Title level={1} className="header raleway-header">
            {TODOS}
          </Title>

          <Space direction="vertical" className="app">
            <FormTask />

            <TaskList />

            <Menu />
          </Space>
        </Space>
      </Flex>
    </Provider>
  );
}

export default App;
