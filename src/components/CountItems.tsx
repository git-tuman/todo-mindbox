import { useMemo } from "react";
import { Typography } from "antd";
import { ITEMS_LEFT } from "../shared/constants";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const { Text } = Typography;

function CountItems() {
  const store = useSelector((state: RootState) => state.todos);

  const count = useMemo(
    () => store.tasks.filter((task) => !task.completed).length,
    [store.tasks]
  );

  return (
    <Text className="text-count-items raleway-text">
      {count} {ITEMS_LEFT}
    </Text>
  );
}

export default CountItems;
