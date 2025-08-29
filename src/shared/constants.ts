export const TODOS = "todos";
export const ITEMS_LEFT = "items left";
export const TEXT_NO_TASKS = "Здесь появятся задачи.";
export const INPUT_PLACEHOLDER = "What needs to be done?";

export const ERORS = {
  ENTER_TASK: "Enter the task!",
  MIN_CHARACTERS: "Minimum 5 characters!",
};

export const FILTERS = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

export const CLEAR_COMPLETED = "Clear completed";

export const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
  CHANGE_FILTER: "CHANGE_FILTER",
} as const;
