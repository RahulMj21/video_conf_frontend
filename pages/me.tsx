import Link from "next/link";
import React from "react";
import { FaArrowRight, FaEnvelope, FaUser } from "react-icons/fa";
import { Container, SectionHeading } from "../styles/common.style";
import {
  Left,
  Right,
  ActionButtons,
  Detail,
  Main,
  Profile,
  ProfileImg,
  Title,
  UserDetailGroup,
  UserDetails,
} from "../styles/profile.style";

const Me = () => {
  return (
    <Profile>
      <Container className="container">
        <SectionHeading>
          My Profile <FaArrowRight />
        </SectionHeading>
        <Main>
          <Left>
            <ProfileImg src="/stream.jpg" alt="user" />
          </Left>
          <Right>
            <UserDetails>
              <UserDetailGroup>
                <Title>
                  <FaUser />
                  Name :
                </Title>
                <Detail>Rahul M</Detail>
              </UserDetailGroup>
              <UserDetailGroup>
                <Title>
                  <FaEnvelope />
                  Email :
                </Title>
                <Detail>rahulmondar@gmail.com</Detail>
              </UserDetailGroup>
            </UserDetails>
            <ActionButtons>
              <Link href="/updateprofile">
                <a>Update Profile</a>
              </Link>
              <Link href="/updatepassword">
                <a>Update Password</a>
              </Link>
            </ActionButtons>
          </Right>
        </Main>
      </Container>
    </Profile>
  );
};

export default Me;
