// package imports
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// component imports
import {
  Button,
  Text,
  LinkText,
  ErrorMessage,
} from "../../components/Reusables/SharedStyling";
import { login } from "../../services/api.service";
import { useData } from "../../Contexts/DataContext";
import { InputComponent } from "../../components/Input";

// Login page
export default function LoginPage() {
  const { setToken, setUserData } = useData();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // handling login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (userDetails?.email !== "" && userDetails?.password !== "") {
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
    } else {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  // Login page rendering
  return (
    <Container>
      <LoginContainer onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="username">
          <InputComponent
            type="text"
            placeholder="Enter email..."
            name="email"
            value={userDetails?.email}
            stateName="email"
            inputHandler={setUserDetails}
          />
        </label>
        <label htmlFor="password">
          <InputComponent
            type="password"
            name="password"
            placeholder="Enter password..."
            value={userDetails?.password}
            stateName="password"
            inputHandler={setUserDetails}
          />
        </label>
        {error && (
          <ErrorMessage>* Please enter correct user credentials </ErrorMessage>
        )}
        <Button
          radius="5px"
          padding="8px 15px"
          width="100px"
          hover="#e6faec"
          fontSize="18px"
          type="submit"
        >
          Login
        </Button>
        <Text fontSize="16px" textColor="#000">
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
