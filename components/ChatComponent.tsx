import React, { FormEvent, MutableRefObject, useRef, useState } from "react";
import { FaComments, FaUsers, FaComment } from "react-icons/fa";
import { NavOverlay } from "../styles/common.style";
import {
  Chat,
  ChatHeader,
  ChatOrUsers,
  ChatBody,
  SingleChat,
  MessageInfo,
  MessageComponent,
  Message,
  TypeMessage,
  ChatInputGroup,
  ChatSubmitBtn,
  ChatToggler,
} from "../styles/singleRoom.style";

const ChatComponent = () => {
  const [show, setShow] = useState(false);
  const [toggleChat, setToggleChat] = useState(false);
  const doMessageRef: MutableRefObject<null | HTMLInputElement> = useRef(null);

  const handleNewChat = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Chat show={show}>
        <ChatToggler onClick={() => setShow(!show)}>
          <FaComment />
          Chat
        </ChatToggler>
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
    </>
  );
};

export default ChatComponent;
