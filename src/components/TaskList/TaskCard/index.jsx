// package imports
import styled from "styled-components";

// component imports
import { DeleteButton } from "../DeleteButton";
import { UpdateButton } from "../UpdateButton";
import { Text } from "../../Reusables/SharedStyling";
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";

// TaskCard component
export const TaskCard = ({
  task,
  statusList,
  handleDelete,
  handleTask,
  handleModal,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <Task
      background={
        task?.status === "todo"
          ? "#97a1f7"
          : task?.status === "inprogress"
          ? "#88db7f"
          : "#f25c5c"
      }
    >
      <TaskTextContainer>
        <Text
          fontSize="20px"
          fontWeight="600"
          fontColor="#000000"
          margin="3px 0px"
        >
          {task?.title}
        </Text>
        <Text
          fontSize="16px"
          fontWeight="400"
          fontColor="#000000"
          margin="5px 0px 15px 0px"
        >
          {task?.description}
        </Text>
        <StatusIndicator
          background={
            task?.status === "todo"
              ? "#97a1f7"
              : task?.status === "inprogress"
              ? "#88db7f"
              : "#f25c5c"
          }
        >
          {statusList.find((st) => st?.value === task?.status)?.label}
        </StatusIndicator>
      </TaskTextContainer>
      {/* action buttons */}
      <ActionContainer>
        {task?.status !== "done" && (
          <UpdateButton
            handleUpdate={handleTask}
            task={task}
            handleModal={handleModal}
          />
        )}
        <DeleteButton handleDeleteModal={() => setShowDeleteModal(true)} />
      </ActionContainer>
      {showDeleteModal && (
        <DeleteModal
          handleDelete={() => handleDelete(task)}
          handleDeleteModal={() => setShowDeleteModal(false)}
        />
      )}
    </Task>
  );
};

const Task = styled.div`
  box-sizing: border-box;
  background: ${(props) => props.background || "#fff"};
  padding: 10px;
  height: fit-content;
  min-height: 180px;
  min-width: 200px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 5px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 2px #848687;
  position: relative;
  @media (max-width: 480px) {
    width: 100%;
    align-self: center;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  gap: 5px;
`;

const TaskTextContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 70px;
  background: white;
  padding: 10px;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
`;

const StatusIndicator = styled.span`
  background: ${(props) => props.background || "transparent"};
  font-size: 16px;
  font-weight: 400;
  padding: 3px 5px;
  border-radius: 10px;
  width: fit-content;
`;
