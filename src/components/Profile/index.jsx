// package imports
import React from "react";
import styled from "styled-components";

// componen import
import { Icon, Text } from "../Reusables/SharedStyling";

// asset import
import ProfileIcon from "../../assets/profile.svg";

export const Profile = ({ userDetails }) => {
  return (
    <ProfileContainer>
      <ProfilePicture src={ProfileIcon} width="100px" height="100px" />
      <Text
        fontSize="24px"
        fontWeight="600"
        textcolor="#00000"
        margin="10px 0px"
      >
        {userDetails?.firstName} {userDetails?.lastName}
      </Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        textcolor="#00000"
        margin="5px 0px"
      >
        {userDetails?.email}
      </Text>
      <Text
        fontSize="16px"
        fontWeight="500"
        textcolor="#00000"
        margin="5px 0px"
      >
        Todo:{" "}
        {userDetails?.tasks?.filter((task) => task?.status === "todo").length}
      </Text>
      <Text
        fontSize="16px"
        fontWeight="500"
        textcolor="#00000"
        margin="5px 0px"
      >
        In Progress:{" "}
        {
          userDetails?.tasks?.filter((task) => task?.status === "inprogress")
            .length
        }
      </Text>
      <Text
        fontSize="16px"
        fontWeight="500"
        textcolor="#00000"
        margin="5px 0px"
      >
        Completed:{" "}
        {userDetails?.tasks?.filter((task) => task?.status === "done").length}
      </Text>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 300px;
  height: auto;
  background: white;
  position: absolute;
  right: 0px;
  top: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border: 1px solid black;
`;

const ProfilePicture = styled(Icon)`
  border-radius: 100px;
  padding: 3px;
  border: 2px solid green;
`;
