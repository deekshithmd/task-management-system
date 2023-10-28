import { Button, Icon } from "../../Reusables/SharedStyling";
import Edit from "../../../assets/edit.svg";

export const UpdateButton = ({ handleUpdate, task, handleModal }) => {
  return (
    <Button
      width="200px"
      borderRadius="15px"
      fontSize="14px"
      hoverColor="#f7c1c1"
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
