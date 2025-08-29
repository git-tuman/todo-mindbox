import { ACTION_TYPES } from "./shared/constants";
import { Store } from "./shared/types";
import { initialStore } from "./store/initialData";
import { reducer } from "./store/reducer";

describe("reducer", () => {
  it("добавляет новую задачу", () => {
    const state = { ...initialStore, tasks: [] };
    const action = { type: ACTION_TYPES.ADD_TASK, payload: "новая задача" };
    const result = reducer(state, action);
    expect(result.tasks).toHaveLength(1);
    expect(result.tasks[0].value).toBe("новая задача");
    expect(result.tasks[0].completed).toBe(false);
  });

  it("переключает completed у задачи", () => {
    const state: Store = {
      ...initialStore,
      tasks: [{ id: 1, value: "тест", completed: false }],
    };
    const action = { type: ACTION_TYPES.TOGGLE_TASK, payload: 1 };
    const result = reducer(state, action);
    expect(result.tasks[0].completed).toBe(true);
  });

  it("удаляет все completed задачи", () => {
    const state: Store = {
      ...initialStore,
      tasks: [
        { id: 1, value: "done", completed: true },
        { id: 2, value: "active", completed: false },
      ],
    };
    const action = { type: ACTION_TYPES.CLEAR_COMPLETED };
    const result = reducer(state, action);
    expect(result.tasks).toHaveLength(1);
    expect(result.tasks[0].value).toBe("active");
  });

  it("меняет фильтр", () => {
    const state = { ...initialStore, filter: "All" };
    const action = { type: ACTION_TYPES.CHANGE_FILTER, payload: "Active" };
    const result = reducer(state, action);
    expect(result.filter).toBe("Active");
  });
});
