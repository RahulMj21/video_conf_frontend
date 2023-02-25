import styled, { keyframes } from "styled-components";
import { device } from "./theme.config";

export const SingleRoomPage = styled.section`
    .container {
        width: 100%;
        display: flex;
        gap: 2rem;
        padding: 2rem 0;
    }
`;

export const VideoStreams = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
        width: 100% !important;
    }
`;
export const Chat = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
        position: fixed;
        top: 0;
        right: 0;
        background: ${(props) => props.theme.body};
        border-left: 1px solid ${(props) => props.theme.border};
        height: 100vh;
        width: 25rem;
        max-width: 90%;
        padding: 2rem;
        padding-top: 3rem;
        z-index: 9999;
        transition: all 0.7s ease;
        transform: ${({ show }: { show: boolean }) =>
            show ? "translateX(0)" : "translateX(100%)"};
    }
`;
export const ChatToggler = styled.div`
    position: absolute;
    top: 8.3rem;
    left: -4.65rem;
    padding: 0.3rem 1rem;
    font-size: 1.2rem;
    letter-spacing: 0.4px;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    background: ${(props) => props.theme.brand};
    cursor: pointer;
    transform: rotate(-90deg) translateY(8px);
`;
export const RoomDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
`;
export const Streams = styled.div`
    background: ${(props) => props.theme.body2};
    padding: 2rem;
    border-radius: 2rem;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    @media ${device.mobileL} {
        padding: 1rem;
    }
`;
export const PopUp = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.15)}
100%{transform:scale(1)}
`;
export const UtilityButton = styled.button`
    height: 3.2rem;
    width: 3.2rem;
    border: 1px solid ${(props) => props.theme.border};
    font-size: 1.2rem;
    background: transparent;
    outline: none;
    color: ${(props) => props.theme.text};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover svg {
        animation: ${PopUp} 0.4s ease;
    }
`;
export const RoomName = styled.h1`
    font-size: 1.9rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export const GroupIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${(props) => props.theme.blue};
    color: white;
    padding: 0.3rem 0.5rem;
    border-radius: 0.6rem;

    svg {
        font-size: 1.25rem;
    }
`;
export const StreamsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;
`;
export const StreamsHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.border};
    color: gray;
    letter-spacing: 0.4px;
    svg {
        font-size: 1.1rem;
    }
`;
export const InviteButton = styled.button`
    color: ${(props) => props.theme.brand};
    background: transparent;
    outline: none;
    border: 1px solid ${(props) => props.theme.brand};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.6rem;
    font-size: 1.1rem;
    border-radius: 0.7rem;
    cursor: pointer;
    align-items: center;

    &:active {
        transform: scale(0.98);
    }

    &:hover {
        svg {
            animation: ${PopUp} 0.5s ease;
        }
    }

    svg {
        font-size: 1.2rem;
    }
`;
export const StreamsBody = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    gap: 2rem;
    max-height: 38rem;
    overflow-y: scroll;
    @media ${device.mobileL} {
        grid-template-columns: 1fr;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
export const Stream = styled.div`
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    border: 3px solid ${(props) => props.theme.border};
    video {
        width: 100%;
        max-width: 100%;
    }
`;
export const UserName = styled.p`
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 0.9rem;
    border-radius: 0.5rem;
`;
export const ActivityBar = styled.div`
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;
export const ActivityIcon = styled.div`
    padding: 0.5rem;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.7rem;
    backdrop-filter: blur(10px);
    color: ${({
        theme,
        active,
    }: {
        theme: { brand: string };
        active: Boolean;
    }) => (active ? theme.brand : "tomato")};
    cursor: pointer;
`;
export const ControlBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media ${device.mobileL} {
        gap: 0.5rem;
    }
    .btn-brand {
        font-size: 1.2rem !important;
        margin: 0 1rem;
        background: ${(props) => props.theme.red};
        white-space: nowrap;
        @media ${device.mobileL} {
            span {
                display: none;
            }
            svg {
                font-size: 1.5rem;
            }
        }
        svg {
            transition: all 0.5s ease;
        }
        &:hover svg {
            transform: none;
            animation: ${PopUp} 0.4s ease;
        }
    }
`;
export const ChatHeader = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
`;
export const ChatOrUsers = styled.button`
    flex: 1;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    border-radius: 0.8rem;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: all 0.5s ease;
    background: ${({
        theme,
        active,
    }: {
        theme: { body2: string; brand: string };
        active: Boolean;
    }) => (active ? theme.brand : theme.body2)};
    color: ${({ active }: { active: Boolean }) => (active ? "white" : "gray")};

    svg {
        font-size: 1.3rem;
    }
`;
export const ChatBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 25rem;
    max-height: 70vh;
    max-height: 60vh;
    overflow-y: scroll;
    margin-bottom: 2rem;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
export const SingleChat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.8rem;
        border: 1px solid ${(props) => props.theme.border};
        object-fit: cover;
    }
`;
export const MessageComponent = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
`;
export const MessageInfo = styled.div`
    padding-left: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        color: ${(props) => props.theme.text};
        font-size: 0.95rem;
        white-space: nowrap;
        &:last-child {
            font-size: 0.85rem;
            color: gray;
        }
    }
`;
export const Message = styled.div`
    background: ${(props) => props.theme.body2};
    padding: 1rem 1rem;
    border-radius: 0.8rem;
    border-bottom-left-radius: 0;
    font-size: 1rem;
    letter-spacing: 0.4px;
    font-weight: 400;
    color: ${(props) => props.theme.text};
    line-height: 1.5;
    word-break: break-all;
`;
export const TypeMessage = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
export const ChatInputGroup = styled.div`
    position: relative;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding: 0.5rem;
    padding-left: 2.2rem;

    svg {
        font-size: 1.2rem;
        color: ${(props) => props.theme.brand};
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 0.5rem;
        transform: translateY(-50%);
    }
    input {
        width: 100%;
        font-size: 1rem;
        letter-spacing: 0.3px;
        background: transparent;
        color: ${(props) => props.theme.text};
    }
`;
export const ChatSubmitBtn = styled.button`
    font-size: 1rem;
    background: transparent;
    color: ${(props) => props.theme.brand};
    border: 1px solid ${(props) => props.theme.brand};
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    text-transform: capitalize;
    letter-spacing: 0.4px;
    cursor: pointer;
    &:active {
        transform: scale(0.98);
    }
`;
