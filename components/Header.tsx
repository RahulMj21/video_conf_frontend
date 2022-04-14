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
import { FaUser, FaVideo, FaSearch, FaThLarge } from "react-icons/fa";
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

  const handleToggleTheme = (state: Boolean) => {
    state
      ? localStorage.setItem("theme", JSON.stringify("dark"))
      : localStorage.setItem("theme", JSON.stringify("light"));
    setIsThemeToggled(state);
  };

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
              <FaVideo /> Create
            </NavItem>
            <NavItem onClick={() => router.push("/me")}>
              <FaUser /> Profile
            </NavItem>
            <NavItem>
              <ThemeToggler
                isThemeToggled={isThemeToggled}
                onClick={() => handleToggleTheme(!isThemeToggled)}
              />
            </NavItem>
          </Nav>
        </Container>
      </HeaderComponent>
    </>
  );
};

export default Header;
