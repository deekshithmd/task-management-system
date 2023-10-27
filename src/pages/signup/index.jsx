"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Text,
  LinkText,
} from "../../components/Reusables/SharedStyling";
import { signup } from "../../services/api.service";

export default function SignupPage() {
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
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
      console.log("res", res);
      if (res.token) {
        navigate("/login");
      }
    } else {
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

  return (
    <Container>
      <LoginContainer onSubmit={handleSignup}>
        <h1>Signup</h1>
        <Label htmlFor="firstname">First Name</Label>
        <Input
          type="text"
          name="firstname"
          placeholder="Type your First Name..."
          value={newUserData?.firstName}
          onChange={(e) =>
            setNewUserData((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        <Label htmlFor="lastname">Last Name</Label>
        <Input
          type="text"
          name="lastname"
          placeholder="Type your Last Name..."
          value={newUserData?.lastName}
          onChange={(e) =>
            setNewUserData((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Type your Email..."
          value={newUserData?.email}
          onChange={(e) =>
            setNewUserData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Type your password..."
          value={newUserData?.password}
          onChange={(e) =>
            setNewUserData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

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
        <Button
          borderRadius="15px"
          padding="8px 15px"
          width="100px"
          hoverColor="#e6faec"
          fontSize="18px"
          type="submit"
        >
          Signup
        </Button>
        <Text fontSize="16px">
          Have account already?{" "}
          <LinkText href="/auth/login">Click here to login</LinkText>
        </Text>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.form`
  width: 300px;
  height: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 15px;
`;

const Input = styled.input`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 18px;
  width: 100%;
  text-align: left;
  margin-left: 55px;
`;
