import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaUser,
  FaUserFriends,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { Container } from "../styles/common.style";
import {
  AllRooms,
  Participants,
  Room,
  RoomBody,
  RoomCreatorImg,
  RoomCreatorName,
  RoomHead,
  RoomName,
  RoomsHeading,
  RoomsPage,
} from "../styles/rooms.style";
import { GroupIcon } from "../styles/singleRoom.style";

const rooms = () => {
  return (
    <RoomsPage>
      <Container className="container">
        <RoomsHeading>
          All Rooms <FaArrowRight />
        </RoomsHeading>
        <AllRooms>
          <Link href={`/room/room1`}>
            <a>
              <Room>
                <RoomHead>
                  <RoomName>
                    <FaVideo /> Birthday boy
                  </RoomName>
                  <GroupIcon>
                    <FaUsers /> Group
                  </GroupIcon>
                </RoomHead>
                <RoomBody>
                  <RoomCreatorImg src="/stream.jpg" alt="Creator" />
                  <RoomCreatorName>
                    <FaUser /> Rahul M
                  </RoomCreatorName>
                </RoomBody>
                <Participants>
                  <FaUserFriends />5 People
                </Participants>
              </Room>
            </a>
          </Link>
          <Link href={`/room/room1`}>
            <a>
              <Room>
                <RoomHead>
                  <RoomName>
                    <FaVideo /> Birthday boy
                  </RoomName>
                  <GroupIcon>
                    <FaUsers /> Group
                  </GroupIcon>
                </RoomHead>
                <RoomBody>
                  <RoomCreatorImg src="/stream.jpg" alt="Creator" />
                  <RoomCreatorName>
                    <FaUser /> Rahul M
                  </RoomCreatorName>
                </RoomBody>
                <Participants>
                  <FaUserFriends />5 People
                </Participants>
              </Room>
            </a>
          </Link>
        </AllRooms>
      </Container>
    </RoomsPage>
  );
};

export default rooms;
