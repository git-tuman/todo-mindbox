import { ACTION_TYPES } from "./constants";

export interface Task {
  id: number;
  value: string;
  completed: boolean;
}

export interface Store {
  filter: string;
  tasks: Task[];
}

export type Action =
  | { type: typeof ACTION_TYPES.ADD_TASK; payload: string }
  | { type: typeof ACTION_TYPES.TOGGLE_TASK; payload: number }
  | { type: typeof ACTION_TYPES.CLEAR_COMPLETED }
  | { type: typeof ACTION_TYPES.CHANGE_FILTER; payload: Store["filter"] };
