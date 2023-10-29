// component imports
import { Button } from "../../Reusables/SharedStyling";

// Button Component
export const ButtonComponent = ({ handleTask, taskUpdateType }) => {
  return (
    <Button
      width="100px"
      radius="15px"
      fontSize="16px"
      border="none"
      background="#97a1f7"
      hover="#3145f5"
      hoverTextColor="#fff"
      padding="10px 20px"
      onClick={() => handleTask()}
    >
      {/* show label based on usage */}
      {taskUpdateType === "create" ? "Create" : "Update"}
    </Button>
  );
};
