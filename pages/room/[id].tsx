import { NextRouter, useRouter } from "next/router";
import React, { FormEvent, MutableRefObject, useRef, useState } from "react";
import {
  FaAngleLeft,
  FaComment,
  FaComments,
  FaEllipsisH,
  FaMicrophone,
  FaPhone,
  FaPlusSquare,
  FaUserFriends,
  FaUsers,
  FaVideo,
  FaVolumeUp,
} from "react-icons/fa";
import { BtnBrand, Container, InputGroup } from "../../styles/common.style";
import {
  ActivityBar,
  ActivityIcon,
  Chat,
  ChatBody,
  ChatHeader,
  ChatInputGroup,
  ChatOrUsers,
  ChatSubmitBtn,
  ControlBar,
  GroupIcon,
  InviteButton,
  Message,
  MessageComponent,
  MessageInfo,
  RoomDetails,
  RoomName,
  SingleChat,
  SingleRoomPage,
  Stream,
  Streams,
  StreamsBody,
  StreamsHeader,
  StreamsHeaderLeft,
  TypeMessage,
  UserName,
  UtilityButton,
  VideoStreams,
} from "../../styles/singleRoom.style";

const SingleRoom = () => {
  const router: NextRouter = useRouter();

  const [toggleChat, setToggleChat] = useState(false);
  const doMessageRef: MutableRefObject<null | HTMLInputElement> = useRef(null);

  const handleNewChat = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SingleRoomPage>
      <Container className="container">
        <VideoStreams>
          <RoomDetails>
            <UtilityButton onClick={() => router.push("/rooms")}>
              <FaAngleLeft />
            </UtilityButton>
            <RoomName>Birthday Party</RoomName>
            <GroupIcon>
              <FaUsers /> Group
            </GroupIcon>
          </RoomDetails>
          <Streams>
            <StreamsHeader>
              <StreamsHeaderLeft>
                <FaUserFriends />
                <span>4 People</span>
              </StreamsHeaderLeft>
              <InviteButton>
                <FaPlusSquare />
                invite
              </InviteButton>
            </StreamsHeader>
            <StreamsBody>
              <Stream>
                <img src="/stream.jpg" alt="stream" />
                <UserName>Rahul M</UserName>
                <ActivityBar>
                  <ActivityIcon active={true}>
                    <FaVideo />
                  </ActivityIcon>
                  <ActivityIcon active={false}>
                    <FaMicrophone />
                  </ActivityIcon>
                </ActivityBar>
              </Stream>
              <Stream>
                <img src="/stream.jpg" alt="stream" />
                <UserName>Rahul M</UserName>
                <ActivityBar>
                  <ActivityIcon active={true}>
                    <FaVideo />
                  </ActivityIcon>
                  <ActivityIcon active={true}>
                    <FaMicrophone />
                  </ActivityIcon>
                </ActivityBar>
              </Stream>
            </StreamsBody>
          </Streams>
          <ControlBar>
            <UtilityButton onClick={() => {}}>
              <FaVolumeUp />
            </UtilityButton>
            <UtilityButton onClick={() => {}}>
              <FaVideo />
            </UtilityButton>
            <BtnBrand className="btn-brand">
              End Call
              <FaPhone />
            </BtnBrand>
            <UtilityButton onClick={() => {}}>
              <FaMicrophone />
            </UtilityButton>
            <UtilityButton onClick={() => {}}>
              <FaEllipsisH />
            </UtilityButton>
          </ControlBar>
        </VideoStreams>
        <Chat>
          <ChatHeader>
            <ChatOrUsers
              onClick={() => setToggleChat(false)}
              active={toggleChat ? false : true}
            >
              <FaComments /> Chat
            </ChatOrUsers>
            <ChatOrUsers
              onClick={() => setToggleChat(true)}
              active={toggleChat ? true : false}
            >
              <FaUsers /> People
            </ChatOrUsers>
          </ChatHeader>
          <ChatBody>
            <SingleChat>
              <MessageInfo>
                <p>Rahul M</p>
                <p>12:10 am</p>
              </MessageInfo>
              <MessageComponent>
                <img src="/stream.jpg" alt="participant" />
                <Message>This is a message dsfdssssssssss</Message>
              </MessageComponent>
            </SingleChat>
            <SingleChat>
              <MessageInfo>
                <p>Rahul M</p>
                <p>12:10 am</p>
              </MessageInfo>
              <MessageComponent>
                <img src="/stream.jpg" alt="participant" />
                <Message>This is a message dsfdssssssssss</Message>
              </MessageComponent>
            </SingleChat>
            <SingleChat>
              <MessageInfo>
                <p>Rahul M</p>
                <p>12:10 am</p>
              </MessageInfo>
              <MessageComponent>
                <img src="/stream.jpg" alt="participant" />
                <Message>This is a message dsfdssssssssss</Message>
              </MessageComponent>
            </SingleChat>
            <SingleChat>
              <MessageInfo>
                <p>Rahul M</p>
                <p>12:10 am</p>
              </MessageInfo>
              <MessageComponent>
                <img src="/stream.jpg" alt="participant" />
                <Message>This is a message dsfdssssssssss</Message>
              </MessageComponent>
            </SingleChat>
            <SingleChat>
              <MessageInfo>
                <p>Rahul M</p>
                <p>12:10 am</p>
              </MessageInfo>
              <MessageComponent>
                <img src="/stream.jpg" alt="participant" />
                <Message>This is a message dsfdssssssssss</Message>
              </MessageComponent>
            </SingleChat>
          </ChatBody>
          <TypeMessage onSubmit={(e) => handleNewChat(e)} autoComplete="off">
            <ChatInputGroup onClick={() => doMessageRef.current?.select()}>
              <FaComment />
              <input
                ref={doMessageRef}
                placeholder="Type a message.."
                autoComplete="off"
                type="text"
                required
              />
            </ChatInputGroup>
            <ChatSubmitBtn type="submit">send</ChatSubmitBtn>
          </TypeMessage>
        </Chat>
      </Container>
    </SingleRoomPage>
  );
};

export default SingleRoom;
