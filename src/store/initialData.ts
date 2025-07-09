import { FILTERS } from "../constants";
import { Store, Task } from "./types";

export const initialList: Task[] = [
    { id: 1, value: "Тестовое задание", completed: false },
    { id: 2, value: "Прекрасный код", completed: true },
    { id: 3, value: "Покртие тестами", completed: false },
];

export const initialStore: Store = {
    filter: FILTERS.ALL,
    tasks: initialList,
};
