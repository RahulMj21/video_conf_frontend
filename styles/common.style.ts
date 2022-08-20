import styled from "styled-components";

export const Container = styled.div`
  width: 80rem;
  max-width: 90%;
  margin: auto;
`;
export const BtnBrand = styled.button`
  padding: 0.7rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: capitalize;
  font-size: 1.3rem;
  border: none;
  outline: none;
  background: ${(props) => props.theme.brand};
  color: white;
  border-radius: 7px;
  margin-top: 1rem;
  cursor: pointer;
  svg {
    font-size: 1rem;
  }
  &:hover {
    svg {
      transform: rotate(360deg);
      transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
  &:active {
    transform: scale(0.98);
  }
`;
export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid gray;
  svg {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    font-size: 1.4rem;
    color: ${(props) => props.theme.brand};
    pointer-events: none;
  }
  label,
  &:valid + label {
    position: absolute;
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    left: 2.5rem;
    font-size: 1.1rem;
    pointer-events: none;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    padding-left: 2.5rem;
    font-size: 1.2rem;
    background: transparent;
    color: ${(props) => props.theme.text};
    border: none;
    outline: none;
    &::placeholder {
      opacity: 0;
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform-origin: top left;
      transform: translateY(-1.9rem) scale(0.8);
    }
  }
  p {
    position: absolute;
    top: 113%;
    left: 0;
    font-size: 0.93rem;
    color: ${(props) => props.theme.redFade};
    margin-bottom: 1rem;
  }
`;
export const ButtonGoogle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0;
  font-size: 1.3rem;
  gap: 0.7rem;
  letter-spacing: 0.5px;
  background: transparent;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  cursor: pointer;
  svg {
    font-size: 1.6rem;
  }
`;
export const SectionHeading = styled.h2`
  position: relative;
  font-size: 1.7rem;
  color: ${(props) => props.theme.text};
  display: inline-flex;
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
    border-radius: 4px;
    background: ${(props) => props.theme.brand};
    transition: all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover {
    svg {
      transform: translateX(0.5rem);
    }
    &::before {
      width: 110%;
    }
  }
`;
export const NavOverlay = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 50;
`;
