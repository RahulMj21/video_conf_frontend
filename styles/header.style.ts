import styled from "styled-components";
import { PopUp } from "./singleRoom.style";
import { device } from "./theme.config";

export const HeaderComponent = styled.header`
  position: fixed;
  width: 100vw;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-bottom: 1px solid ${(props) => props.theme.border};
  transition: all 0.4s ease;
  z-index: 99;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    height: 5.8rem;
  }
`;
export const Logo = styled.h3`
  font-size: 2rem;
  font-family: "Courgette", cursive !important;
  background: ${(props) => props.theme.brand};
  color: white;
  width: 2.8rem;
  height: 2.5rem;
  line-height: 2.5rem;
  display: flex;
  padding: 0.6rem 0.4rem 0.4rem 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: text;
  svg {
    pointer-events: none;
  }
  input {
    border: none;
    outline: none;
    padding-left: 0.5rem;
    font-size: 1rem;
    letter-spacing: 0.3px;
    background: transparent;
    color: ${(props) => props.theme.text};
    &::placeholder {
      text-transform: capitalize;
    }
    @media ${device.laptop} {
      width: 12rem;
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media ${device.laptop} {
    gap: 1rem;
  }
  @media ${device.tablet} {
    position: fixed !important;
    top: 0;
    right: 0;
    min-height: 100vh;
    width: 15rem;
    max-width: 90%;
    background: ${(props) => props.theme.body2};
    flex-direction: column;
    padding: 7rem 0 4rem;
    gap: 3rem;
    border-left: 1px solid ${(props) => props.theme.border};
    transform: ${({ menuToggled }: { menuToggled: boolean }) =>
      menuToggled ? "translateX(0)" : "translateX(150%)"};
    z-index: 999;
    transition: all 0.5s ease;
  }
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  svg {
    color: ${(props) => props.theme.brand};
  }
  &:hover svg {
    animation: ${PopUp} 0.5s ease;
  }
  @media ${device.tablet} {
    gap: 0.5rem;
    letter-spacing: 0.5px;
  }
`;
export const ThemeToggler = styled.div`
  position: relative;
  height: 2rem;
  width: 4rem;
  border-radius: 3rem;
  background: ${({ theme }) => theme.text};
  cursor: pointer;
  margin-left: 1rem;
  @media ${device.laptop} {
    margin-left: 0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 3.2px;
    left: 5px;
    transform: ${({ isThemeToggled }: { isThemeToggled: Boolean }) =>
      isThemeToggled ? "translateX(120%)" : "translateX(0)"};
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.brand};
    pointer-events: none;
    transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
export const Hamburger = styled.div`
  position: relative;
  height: 1.2rem;
  width: 1.6rem;
  cursor: pointer;
  z-index: 9999;
  display: none;
  @media ${device.tablet} {
    display: inline-block;
  }
  &:hover {
    .bar {
      background: ${(props) => props.theme.brand};
    }
  }
  .bar {
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.text};
    pointer-events: none;
    border-radius: 4px;
    transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .bar:nth-of-type(1) {
    top: ${({ menuToggled }: { menuToggled: boolean }) =>
      menuToggled ? "50%" : 0};
    transform: ${({ menuToggled }: { menuToggled: boolean }) =>
      menuToggled ? " rotate(45deg)" : "rotate(0deg)"};
  }
  .bar:nth-of-type(2) {
    top: 50%;
    transform: ${({ menuToggled }: { menuToggled: boolean }) =>
      menuToggled ? "translate(150%,-50%)" : "translateY(-50%)"};
    opacity: ${({ menuToggled }: { menuToggled: boolean }) =>
      menuToggled ? 0 : 1};
  }
  .bar:nth-of-type(3) {
    top: ${({ menuToggled }: { menuToggled: boolean }) =>
      menuToggled ? "50%" : "100%"};
    transform: ${({ menuToggled }: { menuToggled: boolean }) =>
      menuToggled ? "translateY(0%) rotate(-45deg)" : "translateY(-100%)"};
  }
`;
