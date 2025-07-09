import { Button } from "antd";
import { Store } from "antd/es/form/interface";

function BtnMenu({
    name,
    callback,
    active = false,
}: {
    name: string;
    callback: (name: Store["filter"]) => void;
    active?: boolean;
}) {
    return (
        <Button
            color="default"
            variant="text"
            size="small"
            className={
                active
                    ? "filter-btn active raleway-text"
                    : "filter-btn raleway-text"
            }
            onClick={() => callback(name)}
        >
            {name}
        </Button>
    );
}

export default BtnMenu;
