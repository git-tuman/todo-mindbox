import { useContext, useMemo } from "react";
import { ITEMS_LEFT } from "../constants";
import { Typography } from "antd";
import { StoreContext } from "../store/StoreContext";

const { Text } = Typography;

function CountItems() {
    const store = useContext(StoreContext);

    const count = useMemo(
        () => store?.tasks.filter((task) => !task.completed).length,
        [store?.tasks]
    );

    return (
        <Text className="text-count-items raleway-text">
            {count} {ITEMS_LEFT}
        </Text>
    );
}

export default CountItems;
