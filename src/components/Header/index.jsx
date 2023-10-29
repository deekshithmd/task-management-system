// package imports
import React, { useState } from "react";
import styled from "styled-components";

// component imports
import { Button, Icon } from "../Reusables/SharedStyling";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";
import { Profile } from "../Profile";

// asset imports
import ProfileIcon from "../../assets/profile-icon.svg";

// Header component
export const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const { token, setToken, setTaskList, setUserData, userData } = useData();

  // function to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    setToken("");
    setTaskList([]);
    setUserData({});
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")}>MyTasks</Logo>
      {showProfile && <Profile userDetails={userData} />}
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
        <Button
          fontSize="16px"
          hover="#fc6060"
          hovertextcolor="#fff"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      )}
      <ProfileImage
        src={ProfileIcon}
        height="30px"
        width="30px"
        onClick={() => setShowProfile(!showProfile)}
      />
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

const ProfileImage = styled(Icon)`
  position: absolute;
  right: 100px;
`;
