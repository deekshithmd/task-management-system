// package imports
import styled from "styled-components";

// component imports
import { DeleteButton } from "../DeleteButton";
import { UpdateButton } from "../UpdateButton";

// TaskCard component
export const TaskCard = ({
  task,
  statusList,
  handleDelete,
  handleTask,
  handleModal,
}) => {
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
        <span
          style={{
            textDecoration: task?.completed ? "line-through" : "none",
          }}
        >
          Title: {task?.title}
        </span>
        <span>Description: {task?.description}</span>
        <span>
          Status: {statusList.find((st) => st?.value === task?.status)?.label}
        </span>
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
        <DeleteButton handleDelete={handleDelete} task={task} />
      </ActionContainer>
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
