import { Store } from "antd/es/form/interface";
import { CLEAR_COMPLETED, FILTERS } from "../shared/constants";
import { Flex } from "antd";
import CountItems from "./CountItems";
import BtnMenu from "./BtnMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { changeFilter, clearCompleted } from "../store/todosSlice";

function Menu() {
  const store = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleChangeFilter = (name: Store["filter"]) => {
    dispatch(changeFilter(name));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      gap="small"
      className="menu-container"
    >
      <CountItems />

      <Flex gap="small">
        {Object.values(FILTERS).map((name) => (
          <BtnMenu
            key={name}
            name={name}
            callback={handleChangeFilter}
            active={store?.filter === name}
          />
        ))}
      </Flex>

      <BtnMenu name={CLEAR_COMPLETED} callback={handleClearCompleted} />
    </Flex>
  );
}

export default Menu;
