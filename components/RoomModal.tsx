import React, { FormEvent } from "react";
import { FaHome, FaLock, FaPencilAlt } from "react-icons/fa";
import { InputGroup, BtnBrand, Container } from "../styles/common.style";
import {
  Modal,
  ModalForm,
  ModalHeading,
  Overlay,
} from "../styles/RoomModal.style";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoomInput, RoomSchema } from "../schemas";
import { createNewRoom } from "../utils/axios";
import { NextRouter, useRouter } from "next/router";

const RoomModal = ({
  setShowCreateRoomModal,
}: {
  setShowCreateRoomModal: Function;
}) => {
  const router: NextRouter = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomInput>({
    resolver: zodResolver(RoomSchema),
  });

  const handleCreateRoom: SubmitHandler<RoomInput> = async (
    values: RoomInput
  ) => {
    const { data } = await createNewRoom(values);
    if (data.success) {
      toast.success(`room created`);
      router.push(`/room/${data.roomId}`);
    }
    try {
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <Modal>
      <Overlay onClick={() => setShowCreateRoomModal(false)} />
      <Container className="container">
        <ModalHeading>Create Room</ModalHeading>
        <ModalForm autoComplete="off" onSubmit={handleSubmit(handleCreateRoom)}>
          <InputGroup>
            <FaHome />
            <input
              id="roomName"
              autoComplete="off"
              type="text"
              required
              {...register("roomName")}
            />
            <label htmlFor="roomName">Enter Room Name</label>
            <p className="error">{errors?.roomName?.message}</p>
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
