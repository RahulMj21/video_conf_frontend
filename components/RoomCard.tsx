import Link from "next/link";
import { FaVideo, FaUsers, FaUser, FaUserFriends } from "react-icons/fa";
import {
    Room,
    RoomHead,
    RoomBody,
    RoomCreatorImg,
    RoomCreatorName,
    Participants,
} from "../styles/rooms.style";
import { RoomName, GroupIcon } from "../styles/singleRoom.style";
import { IRoom } from "../utils/types";

interface Props {
    room: IRoom;
}

const RoomCard = ({ room }: Props) => {
    return (
        <Link href={`/room/${room._id}`}>
            <a>
                <Room>
                    <RoomHead>
                        <RoomName>
                            <FaVideo /> {room.roomName}
                        </RoomName>
                        <GroupIcon>
                            <FaUsers /> {room.clients} People
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
    );
};

export default RoomCard;
