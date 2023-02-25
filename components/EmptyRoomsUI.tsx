import { Dispatch, SetStateAction } from "react";
import { FaVideo } from "react-icons/fa";
import { BtnBrand } from "../styles/common.style";
import { EmptyRoom } from "../styles/rooms.style";

interface Props {
    showHandler: Dispatch<SetStateAction<boolean>>;
}

const EmptyRoomsUI = ({ showHandler }: Props) => {
    return (
        <EmptyRoom>
            <h1>No Rooms to Show</h1>
            <BtnBrand onClick={() => showHandler(true)}>
                <FaVideo />
                create a room
            </BtnBrand>
        </EmptyRoom>
    );
};

export default EmptyRoomsUI;
