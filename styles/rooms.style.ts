import styled from "styled-components";

export const RoomsPage = styled.section`
  .container {
    padding: 2rem 0;
  }
`;
export const RoomsHeading = styled.h2`
  position: relative;
  width: 11rem;
  font-size: 1.7rem;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-bottom: 1rem;
  margin-bottom: 2.5rem;
  svg {
    font-size: 1.45rem;
    transition: all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 30%;
    bottom: 0;
    left: 0;
    background: ${(props) => props.theme.brand};
    transition: all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover {
    svg {
      transform: translateX(0.5rem);
    }
    &::before {
      width: 100%;
    }
  }
`;
export const AllRooms = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
export const Room = styled.div`
  position: relative;
  padding: 2rem;
  background: ${(props) => props.theme.body2};
  border-bottom: 1px solid ${(props) => props.theme.border2};
  border-left: 1px solid ${(props) => props.theme.border2};
  border-radius: 1rem;
  cursor: pointer;
  /* background: ${(props) =>
    `linear-gradient(45deg,${props.theme.body3},${props.theme.body2})`}; */
`;
export const RoomHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;
export const RoomName = styled.h3`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: ${(props) => props.theme.text};
  svg {
    font-size: 1.4rem;
    color: ${(props) => props.theme.brand};
  }
`;
export const RoomBody = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const RoomCreatorImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.border};
`;
export const RoomCreatorName = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${(props) => props.theme.text};

  svg {
    font-size: 1rem;
  }
`;
export const Participants = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.7rem;
  bottom: 1rem;
  right: 1rem;
  background: ${(props) => props.theme.body};
  font-size: 0.9rem;
  border-radius: 0.4rem;
  color: gray;
  svg {
    font-size: 1.15rem;
    color: ${(props) => props.theme.brand};
  }
`;
