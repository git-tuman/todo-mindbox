import React, { useContext } from "react";
import { Divider, Space, Typography } from "antd";
import { StoreContext } from "../store/StoreContext";
import { Task } from "../shared/types";
import TaskItem from "./TaskItem";
import { FILTERS, TEXT_NO_TASKS } from "../shared/constants";

const { Text } = Typography;

function TaskList() {
  const store = useContext(StoreContext);

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

  return list?.map((task: Task) => (
    <React.Fragment key={task.id}>
      <TaskItem task={task} />

      <Divider className="divider" />
    </React.Fragment>
  ));
}

export default TaskList;
