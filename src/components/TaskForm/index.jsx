import {
  Button,
  Icon,
  Text,
  ModalInnerContainer,
  ModalHeader,
  Input,
  StatusSelector,
  Option,
} from "../Reusables/SharedStyling";
import Close from "../../assets/close.svg";
import { ButtonComponent } from "./Button";

export const TaskForm = ({
  showTaskModal,
  task,
  setTask,
  statusList,
  handleTask,
  taskUpdateType,
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

      <Text fontSize="24px" fontWeight="700">
        Create your Task
      </Text>
      <Input
        type="text"
        placeholder="Type title here..."
        value={task?.title}
        onChange={(e) =>
          setTask((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <Input
        type="text"
        placeholder="Type description here..."
        value={task?.description}
        onChange={(e) =>
          setTask((prev) => ({ ...prev, description: e.target.value }))
        }
      />
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
      <ButtonComponent
        handleTask={handleTask}
        taskUpdateType={taskUpdateType}
      />
    </ModalInnerContainer>
  );
};
