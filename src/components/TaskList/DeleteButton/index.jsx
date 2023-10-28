import { Button, Icon } from "../../Reusables/SharedStyling";
import Delete from "../../../assets/delete.svg";
export const DeleteButton = ({ handleDelete, task }) => {
  return (
    <Button
      width="200px"
      borderRadius="15px"
      fontSize="14px"
      hoverColor="#f7c1c1"
      onClick={() => handleDelete(task)}
    >
      Delete this task
      <Icon src={Delete} height={20} width={20} alt="delete" />
    </Button>
  );
};
