"use client";
import React from "react";
import styled from "styled-components";
import { Button } from "../Reusables/SharedStyling";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";

export const Header = () => {
  const navigate = useNavigate();
  const { token, setToken } = useData();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setToken("");
  };
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")}>MyTasks</Logo>
      {!token ? (
        <Button
          fontSize="16px"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      ) : (
        <Button fontSize="16px" onClick={() => handleLogout()}>
          Logout
        </Button>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff9ed;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 5px 10px;
  max-width: 100vw;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

const Logo = styled.span`
  font-size: 36px;
  font-weight: 700;
  cursor: pointer;
`;
