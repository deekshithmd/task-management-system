// component imports
import { Button } from "../../Reusables/SharedStyling";

// Button Component
export const ButtonComponent = ({ handleTask, taskUpdateType }) => {
  return (
    <Button
      width="100px"
      radius="15px"
      fontSize="16px"
      onClick={() => handleTask()}
    >
      {/* show label based on usage */}
      {taskUpdateType === "create" ? "Create" : "Update"}
    </Button>
  );
};
