import { useContext } from "react";
import { ACTION_TYPES, FILTERS, TEXT_NO_TASKS } from "../constants";
import { Button, Divider, Flex, Space, Typography } from "antd";
import { BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { StoreContext, StoreDispatch } from "../store/StoreContext";
import { Task } from "../store/types";

const { Text } = Typography;

function TaskList() {
    const store = useContext(StoreContext);
    const dispatch = useContext(StoreDispatch);

    if (store?.tasks.length === 0) {
        return (
            <>
                <Space className="task">
                    <Text className="text-no-tasks">{TEXT_NO_TASKS}</Text>
                </Space>

                <Divider className="divider" />
            </>
        );
    }

    function handleToggleTask(id: number) {
        dispatch?.({ type: ACTION_TYPES.TOGGLE_TASK, payload: id });
    }

    function filterTasks() {
        switch (store?.filter) {
            case FILTERS.ALL:
                return store.tasks;
            case FILTERS.ACTIVE:
                return store.tasks.filter((task) => !task.completed);
            case FILTERS.COMPLETED:
                return store.tasks.filter((task) => task.completed);
        }
    }

    const list: Task[] | undefined = filterTasks();

    return (
        <>
            {list &&
                list.map((task: Task) => (
                    <Space key={task.id} className="task-container">
                        <Flex
                            key={task.id}
                            align="center"
                            gap="small"
                            className="task"
                        >
                            <Button
                                color="default"
                                variant="text"
                                className={
                                    task.completed
                                        ? "btn-icon completed-btn"
                                        : "btn-icon"
                                }
                                icon={
                                    task.completed ? (
                                        <CheckSquareOutlined />
                                    ) : (
                                        <BorderOutlined />
                                    )
                                }
                                onClick={() => handleToggleTask(task.id)}
                            />

                            <Text
                                className={
                                    task.completed
                                        ? "task-text completed raleway-text"
                                        : "task-text raleway-text"
                                }
                            >
                                {task.value}
                            </Text>
                        </Flex>

                        <Divider className="divider" />
                    </Space>
                ))}
        </>
    );
}

export default TaskList;
