import { memo, useContext } from "react";
import { StoreDispatch } from "../store/StoreContext";
import { Task } from "../shared/types";
import { Button, Flex, Space, Typography } from "antd";
import { BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { ACTION_TYPES } from "../shared/constants";

const { Text } = Typography;

const TaskItem = memo(({ task }: { task: Task }) => {
  const dispatch = useContext(StoreDispatch);

  function handleToggleTask(id: number) {
    dispatch?.({ type: ACTION_TYPES.TOGGLE_TASK, payload: id });
  }

  return (
    <Space className="task-container">
      <Flex align="center" gap="small" className="task">
        <Button
          color="default"
          variant="text"
          className={task.completed ? "btn-icon completed-btn" : "btn-icon"}
          icon={task.completed ? <CheckSquareOutlined /> : <BorderOutlined />}
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
