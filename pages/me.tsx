import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaPlusSquare,
  FaPowerOff,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import AuthProtectedRoute from "../components/AuthProtectedRoute";
import { clearUser, selectUser } from "../slices/user.slice";
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
  ProfileTop,
} from "../styles/profile.style";
import { InviteButton } from "../styles/singleRoom.style";
import { logoutUser } from "../utils/axios";

const Me = AuthProtectedRoute(() => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    try {
      const { data }: { data: { success: Boolean; message: string } } =
        await logoutUser();
      if (data.success) {
        dispatch(clearUser());
        toast.success(data.message);
        router.push("/auth");
      }
    } catch (error: any) {
      return toast.error(
        error?.response?.data?.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <Profile>
      <Container className="container">
        <ProfileTop>
          <SectionHeading>
            My Profile <FaArrowRight />
          </SectionHeading>
          <InviteButton onClick={handleLogout}>
            <FaPowerOff />
            <span>Log Out</span>
          </InviteButton>
        </ProfileTop>
        <Main>
          <Left>
            <ProfileImg
              height="500"
              width="500"
              src={user?.avatar.secure_url || "/stream.jpg"}
              alt="user"
            />
          </Left>
          <Right>
            <UserDetails>
              <UserDetailGroup>
                <Title>
                  <FaUser />
                  Name :
                </Title>
                <Detail>{user?.name}</Detail>
              </UserDetailGroup>
              <UserDetailGroup>
                <Title>
                  <FaEnvelope />
                  Email :
                </Title>
                <Detail>{user?.email}</Detail>
              </UserDetailGroup>
            </UserDetails>
            <ActionButtons>
              <Link href="/updateprofile">
                <a>Update Profile</a>
              </Link>
              {!user?.isLoggedInWithGoogle && (
                <Link href="/updatepassword">
                  <a>Update Password</a>
                </Link>
              )}
            </ActionButtons>
          </Right>
        </Main>
      </Container>
    </Profile>
  );
});

export default Me;
