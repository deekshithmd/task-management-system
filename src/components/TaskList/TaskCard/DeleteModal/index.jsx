// package imports
import React from "react";
import styled from "styled-components";

// component imports
import { Modal } from "../../../Reusables/Modal/Modal";
import {
  Button,
  Text,
  ModalInnerContainer,
} from "../../../Reusables/SharedStyling";

export const DeleteModal = ({ handleDelete, handleDeleteModal }) => {
  return (
    <Modal>
      <ModalInnerContainer>
        <Text
          fontSize="18px"
          fontWeight="600"
          textColor="#00000"
          margin="0px 0px 20px"
        >
          Are you sure to delete this task?
        </Text>
        <ButtonContainer>
          <Button
            padding="10px 20px"
            border="none"
            background="#fffff"
            radius="18px"
            hover="#fffff"
            onClick={() => handleDeleteModal()}
          >
            Cancel
          </Button>
          <Button
            background="#fc6060"
            padding="10px 20px"
            radius="18px"
            color="#ffff"
            border="none"
            hover="#fc6060"
            hoverTextColor="#ffff"
            onClick={() => {
              handleDeleteModal();
              handleDelete();
            }}
          >
            Delete
          </Button>
        </ButtonContainer>
      </ModalInnerContainer>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
