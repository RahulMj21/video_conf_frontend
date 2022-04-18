import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
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
import { updateUserProfile } from "../utils/axios";

const Updateprofile = AuthProtectedRoute(() => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const avatarRef = useRef<HTMLInputElement | null>(null);
  const [userName, setUserName] = useState(user?.name);
  const [userEmail, setUserEmail] = useState(user?.email);
  const [userAvatar, setUserAvatar] = useState<string>(
    user?.avatar.secure_url as string
  );
  const [uploadableImage, setUploadableImage] = useState<
    string | null | ArrayBuffer
  >(null);

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(
      e.target.files as Iterable<File> | ArrayLike<File>
    );
    if (files.length < 1) return;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = function () {
      setUserAvatar(reader.result as string);
      setUploadableImage(reader.result);
    };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!uploadableImage) {
        if (userName === user?.name && userEmail === user?.email) {
          return toast.error("nothing to update");
        }
      }
      if (userName && userName.length < 3)
        return toast.error("name should be atleast 3 characters long");

      const input = {
        name: userName,
        email: userEmail,
        avatar: uploadableImage ? uploadableImage : "",
      };
      const { data }: { data: { success: Boolean; message: string } } =
        await updateUserProfile(input);
      if (data.success) {
        toast.success(data.message);
        router.push("/me");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <Profile>
      <Container className="container">
        <SectionHeading>
          Update Profile <FaArrowRight />
        </SectionHeading>
        <Main>
          <Left>
            <ProfileImg
              src={userAvatar ? userAvatar : "/stream.jpg"}
              alt="user"
            />
            <FaFileImage onClick={() => avatarRef?.current?.click()} />
            <Overlay />
          </Left>
          <Right onSubmit={(e) => handleSubmit(e)}>
            <input type="file" hidden ref={avatarRef} onChange={handleAvatar} />
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
