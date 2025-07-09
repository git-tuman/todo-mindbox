import { createContext, Dispatch } from "react";
import { Action, Store } from "./types";

export const StoreContext = createContext<Store | undefined>(undefined);
export const StoreDispatch = createContext<Dispatch<Action> | undefined>(
    undefined
);
