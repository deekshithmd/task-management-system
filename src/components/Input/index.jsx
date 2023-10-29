// package imports
import styled from "styled-components";

// Input component
export const InputComponent = ({
  type,
  name,
  placeholder,
  value,
  stateName,
  inputHandler,
}) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) =>
        inputHandler((prev) => ({
          ...prev,
          [stateName]: e.target.value,
        }))
      }
    />
  );
};

const Input = styled.input`
  outline: none;
  border: 2px solid #6b6a68;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;
