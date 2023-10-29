// package imports
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components import
import { useData } from "../../Contexts/DataContext";
import { Icon } from "../../components/Reusables/SharedStyling";
import RequiresAuth from "../../components/RequiresAuth";
import { Modal } from "../../components/Reusables/Modal/Modal";
import { deleteTask, updateTask, addTask } from "../../services/api.service";
import { TaskForm } from "../../components/TaskForm";
import { Filter } from "../../components/Filter";
import { TaskList } from "../../components/TaskList";
import { statusList } from "../../utils/constants";
import { Header } from "../../components/Header";

// assets import
import Add from "../../assets/add.svg";

// Home/Main page
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
      setTaskList(response?.tasks);
      setShowCreateModal(false);

      // resetting after creation
      setTask({
        title: "",
        description: "",
        status: "todo",
      });
    }
  };

  // Deleting task
  const handleDelete = async (task) => {
    const res = await deleteTask({ id: task?._id, token });
    setTaskList(res?.tasks);
  };

  // Updating task content/status
  const handleUpdate = async () => {
    const response = await updateTask({ task: taskToEdit, token });
    setTaskList(response?.tasks);
    setShowEditModal(false);
  };

  // Home page component rendering
  return (
    <RequiresAuth>
      <Container>
        <Header />
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
              heading="Create New Task"
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
              heading="Edit your task here"
            />
          </Modal>
        )}
        <Filter
          filters={filters}
          handleSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
        <TaskList
          filteredData={filtered}
          task={task}
          statusList={statusList}
          handleDelete={handleDelete}
          handleTask={setTaskToEdit}
          handleModal={setShowEditModal}
        />
      </Container>
    </RequiresAuth>
  );
}

// Styled components
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 88vh;
  margin-top: 12vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  row-gap: 5px;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
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
