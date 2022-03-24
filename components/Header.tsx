import React, { MutableRefObject, useRef, useState } from "react";
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
import { NextRouter, useRouter } from "next/router";
import RoomModal from "./RoomModal";

const Header = ({
  isThemeToggled,
  setIsThemeToggled,
}: {
  isThemeToggled: Boolean;
  setIsThemeToggled: Function;
}) => {
  const searchRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const router: NextRouter = useRouter();
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);

  return (
    <>
      {showCreateRoomModal && (
        <RoomModal setShowCreateRoomModal={setShowCreateRoomModal} />
      )}

      <HeaderComponent>
        <Container className="container">
          <Logo onClick={() => router.push("/")}>V</Logo>
          <SearchBar onClick={() => searchRef.current?.select()}>
            <FaSearch />
            <input ref={searchRef} type="text" placeholder="search rooms" />
          </SearchBar>
          <Nav>
            <NavItem onClick={() => router.push("/rooms")}>
              <FaThLarge /> Rooms
            </NavItem>
            <NavItem onClick={() => setShowCreateRoomModal(true)}>
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
    </>
  );
};

export default Header;
