import Image from "next/image";
import styled from "styled-components";
import { PopUp } from "./singleRoom.style";
import { device } from "./theme.config";

export const Profile = styled.section`
  .container {
    padding: 2rem;
  }
`;
export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  @media ${device.laptop} {
    gap: 4rem;
    flex-direction: column;
  }
`;
export const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  button {
    margin-bottom: 2.5rem;
    padding: 0.65rem 1rem;
    @media ${device.mobileL} {
      span {
        display: none;
      }
    }
    svg {
      font-size: 1rem;
    }
  }
`;
export const Left = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${(props) => props.theme.border};
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    color: ${(props) => props.theme.brand};
    z-index: 2;
    cursor: pointer;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ProfileImg = styled(Image)`
  object-fit: cover;
`;
export const Right = styled.form``;
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserDetailGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  letter-spacing: 0.4px;
  @media ${device.mobileL} {
    font-size: 1.15rem;
  }
  input {
    width: 100%;
    color: gray;
    border-bottom: 1px solid gray;
    padding-bottom: 0.5rem;
    background: transparent;
    font-size: 1.2rem;
  }
`;
export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding-bottom: 0.5rem;
  white-space: nowrap;
  svg {
    color: ${(props) => props.theme.brand};
  }
  &:hover svg {
    animation: ${PopUp} 0.5s ease;
  }
`;
export const Detail = styled.p`
  width: 100%;
  color: gray;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
`;
export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: unset;
  }

  a,
  button {
    background-color: transparent;
    border-radius: 2.5rem;
    border: 1px solid ${(props) => props.theme.brand};
    color: ${(props) => props.theme.brand};
    font-size: 1.3rem;
    padding: 0.8rem 2rem;
    cursor: pointer;
    letter-spacing: 0.5px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    text-align: center;
    &:hover {
      background-color: ${(props) => props.theme.brand};
      color: white;
    }
    &:active {
      transition: none;
      transform: scale(0.98);
    }
  }
`;
