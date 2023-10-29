// component import
import { Button, Icon } from "../../Reusables/SharedStyling";

// asset import
import Delete from "../../../assets/delete.svg";

// Delete Button
export const DeleteButton = ({ handleDeleteModal }) => {
  return (
    <Button
      width="200px"
      radius="15px"
      fontSize="14px"
      hover="#f7c1c1"
      onClick={() => handleDeleteModal()}
    >
      Delete this task
      <Icon src={Delete} height={20} width={20} alt="delete" />
    </Button>
  );
};
