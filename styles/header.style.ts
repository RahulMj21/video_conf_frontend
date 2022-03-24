import styled from "styled-components";

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
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;
export const ThemeToggler = styled.div`
  position: relative;
  height: 2rem;
  width: 4rem;
  border-radius: 3rem;
  background: ${({ theme }) => theme.text};
  cursor: pointer;
  margin-left: 1rem;
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
