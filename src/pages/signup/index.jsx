// package imports
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// component imports
import {
  Button,
  Text,
  LinkText,
} from "../../components/Reusables/SharedStyling";
import { signup } from "../../services/api.service";

// Signup page
export default function SignupPage() {
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();

  // function to handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    // testing whether all fields set
    if (
      newUserData?.firstName !== "" &&
      newUserData?.lastName !== "" &&
      newUserData?.email !== "" &&
      newUserData?.password === newUserData?.confirm
    ) {
      const newUser = {
        firstName: newUserData?.firstName,
        lastName: newUserData?.lastName,
        email: newUserData?.email,
        password: newUserData?.password,
      };
      const res = await signup(newUser);

      // on successful signup redirected to login
      if (res.token) {
        navigate("/login");
      }
    } else {
      // if all details not set show signup page with errors
      navigate("/signup");
      setNewUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
      });
    }
  };

  // Signup page rendering
  return (
    <Container>
      <SignupContainer onSubmit={handleSignup}>
        <h1>Signup</h1>
        <HorizontalContainer>
          <FieldContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              placeholder="Type your First Name..."
              value={newUserData?.firstName}
              onChange={(e) =>
                setNewUserData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="lastname" marginRight="70px">
              Last Name
            </Label>
            <Input
              type="text"
              name="lastname"
              placeholder="Type your Last Name..."
              value={newUserData?.lastName}
              onChange={(e) =>
                setNewUserData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </FieldContainer>
        </HorizontalContainer>
        <HorizontalContainer>
          {" "}
          <FieldContainer>
            <Label htmlFor="email" marginRight="53px">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Type your Email..."
              value={newUserData?.email}
              onChange={(e) =>
                setNewUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </FieldContainer>
        </HorizontalContainer>

        <HorizontalContainer>
          <FieldContainer>
            <Label htmlFor="password" marginRight="22px">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Type your password..."
              value={newUserData?.password}
              onChange={(e) =>
                setNewUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              type="password"
              name="confirmd"
              placeholder="Confirm password..."
              value={newUserData?.confirm}
              onChange={(e) =>
                setNewUserData((prev) => ({ ...prev, confirm: e.target.value }))
              }
            />
          </FieldContainer>
        </HorizontalContainer>
        <Button
          radius="15px"
          padding="8px 15px"
          width="100px"
          hover="#e6faec"
          fontSize="18px"
          type="submit"
        >
          Signup
        </Button>
        <Text fontSize="16px">
          Have account already?{" "}
          <LinkText href="/login">Click here to login</LinkText>
        </Text>
      </SignupContainer>
    </Container>
  );
}

// Styled components
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-with: 480px) {
    max-width: 100vw;
  }
`;

const SignupContainer = styled.form`
  width: fit-content;
  height: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 25px;
  @media (max-width: 480px) {
    max-width: 100vw;
  }
`;

const Input = styled.input`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 18px;
  max-width: 150px;
  text-align: left;
  margin-right: ${(props) => props.marginRight || "10px;"};
  @media (max-width: 480px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const FieldContainer = styled.div`
  min-width: 350px;
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
