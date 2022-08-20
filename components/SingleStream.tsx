import React from "react";
import { FaVideo, FaMicrophone } from "react-icons/fa";
import { UserInterface } from "../slices/user.slice";
import {
  Stream,
  UserName,
  ActivityBar,
  ActivityIcon,
} from "../styles/singleRoom.style";
interface SingleStreamProps {
  client: UserInterface;
  provideRef: Function;
}

const SingleStream: React.FC<SingleStreamProps> = ({ client, provideRef }) => {
  return (
    <Stream>
      <video
        ref={(instance) => provideRef(instance, client._id)}
        controls
        autoPlay
      ></video>
      <UserName>{client.name}</UserName>
      <ActivityBar>
        <ActivityIcon active={true}>
          <FaVideo />
        </ActivityIcon>
        <ActivityIcon active={false}>
          <FaMicrophone />
        </ActivityIcon>
      </ActivityBar>
    </Stream>
  );
};

export default SingleStream;
