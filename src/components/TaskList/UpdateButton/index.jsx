// component import
import { Button, Icon } from "../../Reusables/SharedStyling";

// asset import
import Edit from "../../../assets/edit.svg";

// Update Button
export const UpdateButton = ({ handleUpdate, task, handleModal }) => {
  return (
    <Button
      width="200px"
      radius="15px"
      fontSize="14px"
      hover="#f7c1c1"
      onClick={() => {
        handleUpdate(task);
        handleModal(true);
      }}
    >
      Update this task
      <Icon src={Edit} height={20} width={20} alt="delete" />
    </Button>
  );
};
