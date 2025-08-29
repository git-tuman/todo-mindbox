import { TodosState } from "./shared/types";
import reducer, {
  addTask,
  changeFilter,
  clearCompleted,
  initialState,
  toggleTask,
} from "./store/todosSlice";

describe("todosSlice reducer", () => {
  it("добавляет новую задачу", () => {
    const state = { ...initialState, tasks: [] };
    const result = reducer(state, addTask("новая задача"));
    expect(result.tasks).toHaveLength(1);
    expect(result.tasks[0].value).toBe("новая задача");
    expect(result.tasks[0].completed).toBe(false);
  });

  it("переключает completed у задачи", () => {
    const state: TodosState = {
      ...initialState,
      tasks: [{ id: 1, value: "тест", completed: false }],
    };
    const result = reducer(state, toggleTask(1));
    expect(result.tasks[0].completed).toBe(true);
  });

  it("удаляет все completed задачи", () => {
    const state: TodosState = {
      ...initialState,
      tasks: [
        { id: 1, value: "done", completed: true },
        { id: 2, value: "active", completed: false },
      ],
    };
    const result = reducer(state, clearCompleted());
    expect(result.tasks).toHaveLength(1);
    expect(result.tasks[0].value).toBe("active");
  });

  it("меняет фильтр", () => {
    const state = { ...initialState, filter: "All" };
    const result = reducer(state, changeFilter("Active"));
    expect(result.filter).toBe("Active");
  });
});
