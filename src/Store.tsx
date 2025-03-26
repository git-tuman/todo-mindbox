import { createContext, Dispatch, useReducer } from "react";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const initialList: Task[] = [
  { id: 1, text: "Тестовое задание", completed: false },
  { id: 2, text: "Прекрасный код", completed: true },
  { id: 3, text: "Покртие тестами", completed: false },
];

export interface Store {
  filter: "All" | "Active" | "Completed";
  tasks: Task[];
}

const initialStore: Store = {
  filter: "All",
  tasks: initialList,
};

export const StoreContext = createContext<Store | undefined>(undefined);
export const StoreDispatch = createContext<Dispatch<Action> | undefined>(
  undefined
);

type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "CLEAR_COMPLETED" }
  | { type: "CHANGE_FILTER"; payload: Store["filter"] };

function reducer(state: Store, action: Action): Store {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    }
    case "TOGGLE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }),
      };
    }
    case "CLEAR_COMPLETED": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    }
    case "CHANGE_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatch.Provider value={dispatch}>
        {children}
      </StoreDispatch.Provider>
    </StoreContext.Provider>
  );
}
