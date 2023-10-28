import { Button } from "../../Reusables/SharedStyling";

export const ButtonComponent = ({ handleTask, taskUpdateType }) => {
  return (
    <Button
      width="100px"
      borderRadius="15px"
      fontSize="16px"
      onClick={() => handleTask()}
    >
      {taskUpdateType === "create" ? "Create" : "Update"}
    </Button>
  );
};
