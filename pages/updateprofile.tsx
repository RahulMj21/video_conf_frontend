import React, { FormEvent, useState } from "react";
import { FaArrowRight, FaEnvelope, FaFileImage, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import AuthProtectedRoute from "../components/AuthProtectedRoute";
import { selectUser } from "../slices/user.slice";
import { Container, SectionHeading } from "../styles/common.style";
import {
  Left,
  Right,
  ActionButtons,
  Main,
  Profile,
  ProfileImg,
  Title,
  UserDetailGroup,
  UserDetails,
  Overlay,
} from "../styles/profile.style";

const Updateprofile = AuthProtectedRoute(() => {
  const user = useSelector(selectUser);

  const [userName, setUserName] = useState(user?.name);
  const [userEmail, setUserEmail] = useState(user?.email);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Profile>
      <Container className="container">
        <SectionHeading>
          Update Profile <FaArrowRight />
        </SectionHeading>
        <Main>
          <Left>
            <ProfileImg src="/stream.jpg" alt="user" />
            <FaFileImage />
            <Overlay />
          </Left>
          <Right onSubmit={(e) => handleSubmit(e)}>
            <UserDetails>
              <UserDetailGroup>
                <Title>
                  <FaUser />
                  Name :
                </Title>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </UserDetailGroup>
              <UserDetailGroup>
                <Title>
                  <FaEnvelope />
                  Email :
                </Title>
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </UserDetailGroup>
            </UserDetails>
            <ActionButtons>
              <button type="submit">Update Profile</button>
            </ActionButtons>
          </Right>
        </Main>
      </Container>
    </Profile>
  );
});

export default Updateprofile;
