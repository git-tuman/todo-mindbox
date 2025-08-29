import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { CLEAR_COMPLETED, ERORS, INPUT_PLACEHOLDER } from "./shared/constants";
import { toDosList } from "./store/todosSlice";

function setup() {
  return render(<App />);
}

describe("App UI", () => {
  it("показывает стартовые задачи", () => {
    setup();
    toDosList.map((item) =>
      expect(screen.getByText(item.value)).toBeInTheDocument()
    );
  });

  it("фильтрует задачи по статусу", async () => {
    setup();
    console.log(screen.debug());
    await userEvent.click(screen.getByTestId("filter-active"));
    let tasks = screen.queryAllByTestId("task");
    expect(tasks).toHaveLength(toDosList.filter((t) => !t.completed).length);

    await userEvent.click(screen.getByTestId("filter-completed"));
    tasks = screen.queryAllByTestId("task");
    expect(tasks).toHaveLength(toDosList.filter((t) => t.completed).length);

    await userEvent.click(screen.getByTestId("filter-all"));
    tasks = screen.queryAllByTestId("task");
    expect(tasks).toHaveLength(toDosList.length);
  });

  it("выдаёт ошибку если меньше 5 символов", async () => {
    setup();
    const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER);
    await userEvent.type(input, "1234");
    await userEvent.click(screen.getByRole("button", { name: /Add task/i }));
    expect(await screen.findByText(ERORS.MIN_CHARACTERS)).toBeInTheDocument();
  });

  it("добавляет новую задачу", async () => {
    setup();
    const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER);
    const newTask = "Новая валидная задача";
    await userEvent.type(input, newTask);
    await userEvent.click(screen.getByRole("button", { name: /Add task/i }));
    expect(screen.getByText(newTask)).toBeInTheDocument();
  });

  it("переключает задачу в completed", async () => {
    setup();
    const task = screen.getByText(toDosList[0].value);
    const toggleBtn = task.closest(".task")!.querySelector("button")!;
    await userEvent.click(toggleBtn);
    expect(toggleBtn.className).toMatch(/completed-btn/);
  });

  it("очищает completed задачи", async () => {
    setup();
    const clearBtn = screen.getByRole("button", {
      name: CLEAR_COMPLETED,
    });
    await userEvent.click(clearBtn);
    expect(screen.queryByText(toDosList[1].value)).not.toBeInTheDocument();
  });
});
