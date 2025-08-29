import { useReducer } from "react";
import { reducer } from "./reducer";
import { initialStore } from "./initialData";
import { StoreContext, StoreDispatch } from "./StoreContext";

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
