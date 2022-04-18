import { NextRouter, useRouter } from "next/router";
import React, {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
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
import AuthProtectedRoute from "../../components/AuthProtectedRoute";
import { BtnBrand, Container } from "../../styles/common.style";
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
import { fetchSingleRooms } from "../../utils/axios";
import { RoomInterface } from "../rooms";

const SingleRoom = AuthProtectedRoute(() => {
  const router: NextRouter = useRouter();
  const roomId = window.location.pathname.replace("/room/", "");

  const [room, setRoom] = useState<null | RoomInterface>(null);
  const [toggleChat, setToggleChat] = useState(false);
  const doMessageRef: MutableRefObject<null | HTMLInputElement> = useRef(null);

  const handleNewChat = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    (async () => {
      try {
        const { data }: { data: { success: Boolean; room: RoomInterface } } =
          await fetchSingleRooms(roomId);
        if (data.success) {
          setRoom(data.room);
        }
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message
            ? error.response.data.message
            : error.message
        );
        router.push("/rooms");
      }
    })();
  }, []);

  return (
    room && (
      <SingleRoomPage>
        <Container className="container">
          <VideoStreams>
            <RoomDetails>
              <UtilityButton onClick={() => router.push("/rooms")}>
                <FaAngleLeft />
              </UtilityButton>
              <RoomName>{room.roomName}</RoomName>
              <GroupIcon>
                <FaUsers /> Group
              </GroupIcon>
            </RoomDetails>
            <Streams>
              <StreamsHeader>
                <StreamsHeaderLeft>
                  <FaUserFriends />
                  <span>{room.clients} People</span>
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
    )
  );
});

export default SingleRoom;
