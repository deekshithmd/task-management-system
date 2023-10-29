//package imports
import React from "react";

//component imports
import {
  Icon,
  Text,
  ModalInnerContainer,
  ModalHeader,
  StatusSelector,
  Option,
} from "../Reusables/SharedStyling";
import Close from "../../assets/close.svg";
import { ButtonComponent } from "./Button";
import { InputComponent } from "../Input";

// TaskForm component to create and update tasks
export const TaskForm = ({
  showTaskModal,
  task,
  setTask,
  statusList,
  handleTask,
  taskUpdateType,
  heading,
}) => {
  return (
    <ModalInnerContainer>
      <ModalHeader>
        <Icon
          src={Close}
          height={30}
          width={30}
          alt="close"
          onClick={() => showTaskModal(false)}
        />
      </ModalHeader>

      <Text fontSize="24px" fontWeight="700" fontColor="#000000" margin="0px">
        {heading}
      </Text>
      <InputComponent
        type="text"
        placeholder="Type title here..."
        value={task?.title}
        stateName="title"
        inputHandler={setTask}
      />
      <InputComponent
        type="text"
        placeholder="Type description here..."
        value={task?.description}
        stateName="description"
        inputHandler={setTask}
      />
      {/* status selection */}
      <StatusSelector
        onChange={(v) => {
          setTask((prev) => ({ ...prev, status: v.target.value }));
        }}
      >
        {statusList?.map((status) => (
          <Option
            key={status?.id}
            value={status?.value}
            selected={status?.value === task?.status ? true : false}
          >
            {status.label}
          </Option>
        ))}
      </StatusSelector>
      {/* action button */}
      <ButtonComponent
        handleTask={handleTask}
        taskUpdateType={taskUpdateType}
      />
    </ModalInnerContainer>
  );
};
