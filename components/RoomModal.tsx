import React, { FormEvent } from "react";
import { FaHome, FaLock, FaPencilAlt } from "react-icons/fa";
import { InputGroup, BtnBrand, Container } from "../styles/common.style";
import {
  Modal,
  ModalForm,
  ModalHeading,
  Overlay,
} from "../styles/RoomModal.style";

const RoomModal = ({
  setShowCreateRoomModal,
}: {
  setShowCreateRoomModal: Function;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Modal>
      <Overlay onClick={() => setShowCreateRoomModal(false)} />
      <Container className="container">
        <ModalHeading>Create Room</ModalHeading>
        <ModalForm autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup>
            <FaHome />
            <input name="roomname" autoComplete="off" type="text" required />
            <label htmlFor="roomname">Enter Room Name</label>
          </InputGroup>
          <InputGroup className="last-input">
            <FaLock />
            <input
              name="roompassword"
              autoComplete="new-password"
              type="password"
              required
            />
            <label htmlFor="roompassword">Enter Room Password</label>
          </InputGroup>
          <BtnBrand type="submit">
            Create <FaPencilAlt />
          </BtnBrand>
        </ModalForm>
      </Container>
    </Modal>
  );
};

export default RoomModal;
