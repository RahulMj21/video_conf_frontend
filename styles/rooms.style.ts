import styled from "styled-components";

export const RoomsPage = styled.section`
  .container {
    padding: 2rem 0;
  }
`;
export const EmptyRoom = styled.div`
  text-align: center;
  h1 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: gray;
    opacity: 0.5;
  }
  button {
    margin: auto !important;
  }
`;
export const AllRooms = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
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
