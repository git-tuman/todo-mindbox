import { memo, useContext } from "react";
import { StoreDispatch } from "../store/StoreContext";
import { ACTION_TYPES } from "../constants";
import { Task } from "../store/types";
import { Button, Flex, Space, Typography } from "antd";
import { BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";

const { Text } = Typography;

const TaskItem = memo(({ task }: { task: Task }) => {
    const dispatch = useContext(StoreDispatch);

    function handleToggleTask(id: number) {
        dispatch?.({ type: ACTION_TYPES.TOGGLE_TASK, payload: id });
    }

    return (
        <Space key={task.id} className="task-container">
            <Flex key={task.id} align="center" gap="small" className="task">
                <Button
                    color="default"
                    variant="text"
                    className={
                        task.completed ? "btn-icon completed-btn" : "btn-icon"
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
        </Space>
    );
});

export default TaskItem;
