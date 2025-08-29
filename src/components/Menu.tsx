import { useContext } from "react";
import { Store } from "antd/es/form/interface";
import { ACTION_TYPES, CLEAR_COMPLETED, FILTERS } from "../shared/constants";
import { Flex } from "antd";
import CountItems from "./CountItems";
import BtnMenu from "./BtnMenu";
import { StoreContext, StoreDispatch } from "../store/StoreContext";

function Menu() {
  const store = useContext(StoreContext);
  const dispatch = useContext(StoreDispatch);

  const handleChangeFilter = (name: Store["filter"]) => {
    dispatch?.({ type: ACTION_TYPES.CHANGE_FILTER, payload: name });
  };

  const handleClearCompleted = () => {
    dispatch?.({ type: ACTION_TYPES.CLEAR_COMPLETED });
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
