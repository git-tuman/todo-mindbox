import { memo } from "react";
import { Task } from "../shared/types";
import { Button, Flex, Space, Typography } from "antd";
import { BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggleTask } from "../store/todosSlice";

const { Text } = Typography;

const TaskItem = memo(({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  function handleToggleTask(id: number) {
    dispatch(toggleTask(id));
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
          data-testid="task"
        >
          {task.value}
        </Text>
      </Flex>
    </Space>
  );
});

export default TaskItem;
