// package imports
import React from "react";
import styled from "styled-components";

// Modal component
export const Modal = ({ children }) => {
  return <ModalContainer>{children}</ModalContainer>;
};

const ModalContainer = styled.div`
  position: fixed;
  top: 12vh;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 1;
  z-index: 2;
`;
