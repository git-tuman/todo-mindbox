import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TodosState } from "../shared/types";
import { FILTERS } from "../shared/constants";

export const toDosList: Task[] = [
  { id: 1, value: "Тестовое задание", completed: false },
  { id: 2, value: "Прекрасный код", completed: true },
  { id: 3, value: "Покртие тестами", completed: false },
];

export const initialState: TodosState = {
  filter: FILTERS.ALL,
  tasks: toDosList,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: Date.now(),
        value: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((t) => !t.completed);
    },
    changeFilter: (state, action: PayloadAction<TodosState["filter"]>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, clearCompleted, changeFilter } =
  todosSlice.actions;
export default todosSlice.reducer;
