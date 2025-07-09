import { TODOS } from "./constants";
import FormTask from "./components/FormTask";
import TaskList from "./components/TaskList";
import Menu from "./components/Menu";
import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";
import StoreProvider from "./store/StoreProvider";

function App() {
    return (
        <StoreProvider>
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
        </StoreProvider>
    );
}

export default App;
