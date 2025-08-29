// import { useReducer } from "react";
// import { reducer } from "./reducer";
// import { StoreContext, StoreDispatch } from "./StoreContext";
// import { initialState } from "./todosSlice";

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [store, dispatch] = useReducer(reducer, initialState);

//   return (
//     <StoreContext.Provider value={store}>
//       <StoreDispatch.Provider value={dispatch}>
//         {children}
//       </StoreDispatch.Provider>
//     </StoreContext.Provider>
//   );
// }
