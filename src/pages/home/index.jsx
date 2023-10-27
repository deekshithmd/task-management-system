import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useData } from "../../Contexts/DataContext";
import { Button, Icon } from "../../components/Reusables/SharedStyling";
import RequiresAuth from "../../components/RequiresAuth";
import Add from "../../assets/add.svg";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import { Modal } from "../../components/Reusables/Modal/Modal";
import {
  getTasks,
  deleteTask,
  updateTask,
  addTask,
} from "../../services/api.service";
import { TaskForm } from "../../components/TaskForm";

export default function Home() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "todo",
  });
  const [taskToEdit, setTaskToEdit] = useState();
  const [selectedFilter, setSelectedFilter] = useState({
    id: 1,
    name: "All",
    value: "all",
  });
  const [filtered, setFiltered] = useState([]);
  const { taskList, setTaskList, token } = useData();

  const statusList = [
    { id: 1, label: "To Do", value: "todo" },
    { id: 2, label: "In Progress", value: "inprogress" },
    { id: 3, label: "Done", value: "done" },
  ];

  const filters = [{ id: 4, label: "All", value: "all" }, ...statusList];

  // Filtering tasks
  useEffect(() => {
    if (selectedFilter?.value === "all") {
      setFiltered(taskList);
    } else {
      const filterValue = selectedFilter?.value;
      const taskData = taskList?.filter((task) => task?.status === filterValue);
      setFiltered(taskData);
    }
  }, [selectedFilter, taskList]);

  // Creating new task
  const handleCreate = async () => {
    if (task.title !== "" && task.description !== "") {
      const response = await addTask({ task: task, token });
      setTaskList(response);
      setShowCreateModal(false);
      setTask({
        title: "",
        description: "",
        status: "Todo",
      });
    }
  };

  // Deleting task
  const handleDelete = async (task) => {
    const res = await deleteTask({ id: task?._id, token });
    setTaskList(res);
  };

  // Updating task content/status
  const handleUpdate = async () => {
    const response = await updateTask({ task: taskToEdit, token });
    setTaskList(response);
    setShowEditModal(false);
  };

  return (
    <RequiresAuth>
      <Container>
        <AddTaskContainer>
          <AddTask onClick={() => setShowCreateModal(true)}>
            <div>Add a Task</div>
            <Icon src={Add} height={40} width={40} alt="add" />
          </AddTask>
        </AddTaskContainer>
        {showCreateModal && (
          <Modal>
            <TaskForm
              task={task}
              setTask={setTask}
              statusList={statusList}
              handleTask={handleCreate}
              showTaskModal={setShowCreateModal}
              taskUpdateType="create"
            />
          </Modal>
        )}
        {showEditModal && (
          <Modal>
            <TaskForm
              task={taskToEdit}
              setTask={setTaskToEdit}
              statusList={statusList}
              handleTask={handleUpdate}
              showTaskModal={setShowEditModal}
              taskUpdateType="update"
            />
          </Modal>
        )}
        <FilterContainer>
          {filters.map((filter) => (
            <FilterItem
              key={filter.id}
              onClick={() => setSelectedFilter(filter)}
              background={
                selectedFilter?.value === filter?.value ? "#a19aed" : "#ffff"
              }
              color={selectedFilter?.value === filter?.value ? "#ffff" : ""}
            >
              {filter.label}
            </FilterItem>
          ))}
        </FilterContainer>
        <TasksContainer>
          {filtered?.length > 0 ? (
            filtered?.map((todo) => {
              return (
                <TaskCard
                  key={todo?.id}
                  background={
                    todo?.status === "todo"
                      ? "#97a1f7"
                      : todo?.status === "inprogress"
                      ? "#88db7f"
                      : "#f25c5c"
                  }
                >
                  <TaskTextContainer>
                    <span
                      style={{
                        textDecoration: todo?.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      Title: {todo?.title}
                    </span>
                    <span>Description: {todo?.description}</span>
                    <span>
                      Status:{" "}
                      {statusList.find((st) => st.value === todo?.status).label}
                    </span>
                  </TaskTextContainer>
                  <ActionContainer>
                    {todo?.status !== "done" && (
                      <Button
                        width="200px"
                        borderRadius="15px"
                        fontSize="14px"
                        hoverColor="#fcebc5"
                        onClick={() => {
                          setTaskToEdit(todo);
                          setShowEditModal(true);
                        }}
                      >
                        Update this task
                        <Icon src={Edit} height={20} width={20} alt="delete" />
                      </Button>
                    )}
                    <Button
                      width="200px"
                      borderRadius="15px"
                      fontSize="14px"
                      hoverColor="#f7c1c1"
                      onClick={() => handleDelete(todo)}
                    >
                      Delete this task
                      <Icon src={Delete} height={20} width={20} alt="delete" />
                    </Button>
                  </ActionContainer>
                </TaskCard>
              );
            })
          ) : (
            <FilterContainer>
              <h3>No Todos Added here</h3>
            </FilterContainer>
          )}
        </TasksContainer>
      </Container>
    </RequiresAuth>
  );
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 88vh;
  margin-top: 12vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  row-gap: 20px;
  column-gap: 15px;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AddTaskContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddTask = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f2a6;
`;

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
  // &::-webkit-scrollbar-track {
  //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  // }
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

const TaskCard = styled.div`
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

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    max-width: 100vw;
  }
`;

const FilterItem = styled.span`
  padding: 5px;
  min-width: 90px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.background || "transparent"};
  &:hover {
    background: #a19aed;
    color: #ffffff;
  }
  @media (max-width: 480px) {
    min-width: fint-content;
    padding: 5px 0px;
  }
`;
