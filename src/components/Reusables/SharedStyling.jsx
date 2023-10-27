import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width || "auto"};
  padding: ${(props) => props.padding || "5px 10px"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "1px solid black"};
  font-size: ${(props) => props.fontSize || "12px"};
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  gap: 2px;
  &:hover {
    background: ${(props) => props.hoverColor || "#aed7fc"};
    color: ${(props) => props.hoverTextColor || "#2b2b29"};
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.height || "30px"};
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;

export const LinkText = styled.a`
  text-decoration: underline;
`;

export const ModalInnerContainer = styled.div`
  width: 300px;
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  row-gap: 15px;
  background: white;
  border-radius: 15px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

export const StatusSelector = styled.select`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  width: 73%;
  z-index: 10;
`;

export const Option = styled.option`
  padding: 5px 20px;
`;
