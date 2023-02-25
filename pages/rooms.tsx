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
import { IRoom } from "../utils/types";
import RoomCard from "../components/RoomCard";
import EmptyRoomsUI from "../components/EmptyRoomsUI";

const rooms = AuthProtectedRoute(() => {
    const [roomList, setRoomList] = useState<null | IRoom[]>(null);
    const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { success, rooms: fetchedRooms },
                }: { data: { success: Boolean; rooms: IRoom[] } } =
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
                                <RoomCard room={room} key={room._id} />
                            ))}
                        </AllRooms>
                    ) : (
                        <EmptyRoomsUI showHandler={setShowCreateRoomModal} />
                    )}
                </Container>
            </RoomsPage>
        </>
    );
});

export default rooms;
