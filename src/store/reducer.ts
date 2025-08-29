// import { ACTION_TYPES } from "../shared/constants";
// import { Action, TodosState, Task } from "../shared/types";

// export function reducer(state: TodosState, action: Action): TodosState {
//   switch (action.type) {
//     case ACTION_TYPES.ADD_TASK: {
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           { id: Date.now(), value: action.payload, completed: false },
//         ],
//       };
//     }
//     case ACTION_TYPES.TOGGLE_TASK: {
//       return {
//         ...state,
//         tasks: state.tasks.map((task: Task) => {
//           if (task.id === action.payload) {
//             return { ...task, completed: !task.completed };
//           }
//           return task;
//         }),
//       };
//     }
//     case ACTION_TYPES.CLEAR_COMPLETED: {
//       return {
//         ...state,
//         tasks: state.tasks.filter((task: Task) => !task.completed),
//       };
//     }
//     case ACTION_TYPES.CHANGE_FILTER: {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }
