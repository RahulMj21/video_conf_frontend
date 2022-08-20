import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaAngleLeft,
  FaEllipsisH,
  FaMicrophone,
  FaPhone,
  FaPlusSquare,
  FaUserFriends,
  FaUsers,
  FaVideo,
  FaVolumeUp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import AuthProtectedRoute from "../../components/AuthProtectedRoute";
import ChatComponent from "../../components/ChatComponent";
import SingleStream from "../../components/SingleStream";
import { useWebRTC } from "../../hooks/useWebRTC2";
import { selectUser, UserInterface } from "../../slices/user.slice";
import { BtnBrand, Container } from "../../styles/common.style";
import {
  ActivityBar,
  ActivityIcon,
  ControlBar,
  GroupIcon,
  InviteButton,
  RoomDetails,
  RoomName,
  SingleRoomPage,
  Stream,
  Streams,
  StreamsBody,
  StreamsHeader,
  StreamsHeaderLeft,
  UserName,
  UtilityButton,
  VideoStreams,
} from "../../styles/singleRoom.style";
import { fetchSingleRooms } from "../../utils/axios";
import { RoomInterface } from "../rooms";

const SingleRoom = AuthProtectedRoute(() => {
  const router: NextRouter = useRouter();
  const roomId = router.query.id as string;
  const user = useSelector(selectUser);
  if (!user) return null;

  const { clients, provideInstance, socket } = useWebRTC(roomId, user);

  const [room, setRoom] = useState<null | RoomInterface>(null);

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
              <UtilityButton
                onClick={() => {
                  socket.current?.emit("leave");
                  router.push("/rooms");
                }}
              >
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
                {clients.map((client: UserInterface) => {
                  return (
                    // <SingleStream
                    //   ref={(instance) => {
                    //   return provideInstance(
                    //   instance as HTMLVideoElement,
                    //   client._id
                    //  );
                    // }}
                    //   client={client}
                    //   key={client._id}
                    // />
                    <video
                      controls
                      autoPlay
                      height={400}
                      width={400}
                      ref={(instance) => {
                        return provideInstance(
                          instance as HTMLVideoElement,
                          client._id
                        );
                      }}
                    ></video>
                  );
                })}
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
                <span>End Call</span>
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
          <ChatComponent />
        </Container>
      </SingleRoomPage>
    )
  );
});

export default SingleRoom;
