import React from "react";
import { Container } from "../styles/common.style";
import {
  HeaderComponent,
  Logo,
  Nav,
  NavItem,
  SearchBar,
  ThemeToggler,
} from "../styles/header.style";
import { FaPencilAlt, FaSearch, FaThLarge } from "react-icons/fa";
import Link from "next/link";

const Header = ({
  isThemeToggled,
  setIsThemeToggled,
}: {
  isThemeToggled: Boolean;
  setIsThemeToggled: Function;
}) => {
  return (
    <HeaderComponent>
      <Container className="container">
        <Logo>V</Logo>
        <SearchBar>
          <FaSearch />
          <input type="text" placeholder="search rooms" />
        </SearchBar>
        <Nav>
          <Link href="/rooms">
            <a>
              <NavItem>
                <FaThLarge /> Rooms
              </NavItem>
            </a>
          </Link>
          <NavItem>
            <FaPencilAlt /> Create
          </NavItem>
          <NavItem>
            <ThemeToggler
              isThemeToggled={isThemeToggled}
              onClick={() => setIsThemeToggled(!isThemeToggled)}
            />
          </NavItem>
        </Nav>
      </Container>
    </HeaderComponent>
  );
};

export default Header;
