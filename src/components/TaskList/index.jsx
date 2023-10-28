import { TaskCard } from "./TaskCard";
import styled from "styled-components";

export const TaskList = ({
  filteredData,
  statusList,
  handleDelete,
  handleTask,
  handleModal,
}) => {
  return (
    <TasksContainer>
      {filteredData?.length > 0 ? (
        filteredData?.map((task) => {
          return (
            <TaskCard
              key={task?.id}
              task={task}
              statusList={statusList}
              handleDelete={handleDelete}
              handleTask={handleTask}
              handleModal={handleModal}
            />
          );
        })
      ) : (
        <TextContainer>
          <h3>No Tasks Added here</h3>
        </TextContainer>
      )}
    </TasksContainer>
  );
};

const TasksContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 50px;
  height: auto;
  min-height: 30vh;
  max-height: 40vh;
  overflow-y: scroll;
  overflow-x: unset;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  &::-webkit-scrollbar {
    width: 5px;
    background: #e6fcec;
  }
  &::-webkit-scrollbar-thumb {
    background: #5c8a68;
    border-radius: 5px;
  }
  @media (max-width: 480px) {
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    max-height: 100vh;
    overflow-y: auto;
    max-width: 100vw;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    max-width: 100vw;
  }
`;
