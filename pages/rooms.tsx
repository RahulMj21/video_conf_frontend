import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaUser,
  FaUserFriends,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { BtnBrand, Container, SectionHeading } from "../styles/common.style";
import {
  AllRooms,
  EmptyRoom,
  Participants,
  Room,
  RoomBody,
  RoomCreatorImg,
  RoomCreatorName,
  RoomHead,
  RoomName,
  RoomsPage,
} from "../styles/rooms.style";
import { GroupIcon } from "../styles/singleRoom.style";
import { fetchAllRooms } from "../utils/axios";
import RoomModal from "../components/RoomModal";
import AuthProtectedRoute from "../components/AuthProtectedRoute";

export interface RoomInterface {
  _id: string;
  roomName: string;
  roomCreator: {
    name: string;
    avatar: {
      public_id: string;
      secure_url: string;
    };
    _id: string;
  };
  clients: number;
}

const rooms = AuthProtectedRoute(() => {
  const [roomList, setRoomList] = useState<null | RoomInterface[]>(null);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { success, rooms: fetchedRooms },
        }: { data: { success: Boolean; rooms: RoomInterface[] } } =
          await fetchAllRooms();
        if (success && fetchedRooms.length > 0) {
          setRoomList(fetchedRooms);
        } else {
          setRoomList(null);
        }
      } catch (error: any) {
        setRoomList(null);
      }
    })();
  }, []);

  return (
    <>
      {showCreateRoomModal && (
        <RoomModal setShowCreateRoomModal={setShowCreateRoomModal} />
      )}
      <RoomsPage>
        <Container className="container">
          <SectionHeading>
            All Rooms <FaArrowRight />
          </SectionHeading>
          {roomList ? (
            <AllRooms>
              {roomList.map((room) => (
                <Link href={`/room/${room._id}`} key={room._id}>
                  <a>
                    <Room>
                      <RoomHead>
                        <RoomName>
                          <FaVideo /> {room.roomName}
                        </RoomName>
                        <GroupIcon>
                          <FaUsers /> People
                        </GroupIcon>
                      </RoomHead>
                      <RoomBody>
                        <RoomCreatorImg
                          src={
                            room.roomCreator.avatar.secure_url
                              ? room.roomCreator.avatar.secure_url
                              : "/stream.jpg"
                          }
                          alt="Creator"
                        />
                        <RoomCreatorName>
                          <FaUser /> {room.roomCreator.name}
                        </RoomCreatorName>
                      </RoomBody>
                      <Participants>
                        <FaUserFriends />
                        {room.clients} People
                      </Participants>
                    </Room>
                  </a>
                </Link>
              ))}
            </AllRooms>
          ) : (
            <EmptyRoom>
              <h1>No Rooms to Show</h1>
              <BtnBrand onClick={() => setShowCreateRoomModal(true)}>
                <FaVideo />
                create a room
              </BtnBrand>
            </EmptyRoom>
          )}
        </Container>
      </RoomsPage>
    </>
  );
});

export default rooms;
