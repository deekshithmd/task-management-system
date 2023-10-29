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
import { login } from "../../services/api.service";
import { useData } from "../../Contexts/DataContext";

// Login page
export default function LoginPage() {
  const { setToken, setUserData } = useData();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // handling login
  const handleLogin = async (e) => {
    e.preventDefault();
    // login api call
    const res = await login({
      email: userDetails.email,
      password: userDetails.password,
    });
    if (res?.token) {
      // if user exists then storing token in sessionStorage to handle page refresh
      sessionStorage.setItem("userToken", res?.token);
      setToken(res.token);
      setUserData({
        name: `${res.firstName} ${res.lastName}`,
        email: res.email,
      });

      // restting user details after login
      setUserDetails({
        username: "",
        password: "",
      });

      // navigate to home page after login
      navigate("/");
    }
  };

  // Login page rendering
  return (
    <Container>
      <LoginContainer onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="username">
          <Input
            type="text"
            placeholder="Enter email..."
            name="email"
            value={userDetails?.email}
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>
        <label htmlFor="password">
          <Input
            type="password"
            name="password"
            placeholder="Enter password..."
            value={userDetails?.password}
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </label>
        <Button
          radius="15px"
          padding="8px 15px"
          width="100px"
          hover="#e6faec"
          fontSize="18px"
          type="submit"
        >
          Login
        </Button>
        <Text fontSize="16px">
          Don`t have account?{" "}
          <LinkText href="/signup">Click here to Signup</LinkText>
        </Text>
      </LoginContainer>
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
`;

const LoginContainer = styled.form`
  width: 300px;
  height: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px 10px;
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
