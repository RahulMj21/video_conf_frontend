import styled from "styled-components";

export const HomePage = styled.section`
  .container {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Left = styled.div``;
export const Right = styled.div``;
export const MainHeading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  span {
    color: ${(props) => props.theme.brand};
    font-weight: 700 !important;
  }
`;
export const Para = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.3px;
  color: gray;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;
export const Button = styled.button`
  position: relative;
  border: none;
  background: transparent;
  outline: none;
  padding: 0.5rem 1.7rem;
  font-size: 1.25rem;
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  z-index: 1;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  transition: 0.5s ease;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 20%;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.brand};
    border-radius: 2rem;
    transition: all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: -1;
    pointer-events: none;
  }
  &:hover {
    color: #fafafa;
    svg {
      transform: translateX(0.85rem);
      transition: transform 0.5s ease 0.2s;
    }
    &::before {
      width: 100%;
    }
  }
`;
