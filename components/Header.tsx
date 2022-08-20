import { NextRouter, useRouter } from "next/router";
import { MutableRefObject, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaSearch, FaThLarge, FaUser, FaVideo } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/user.slice";
import { Container, NavOverlay } from "../styles/common.style";
import {
  Hamburger,
  HeaderComponent,
  Logo,
  Nav,
  NavItem,
  SearchBar,
  ThemeToggler,
} from "../styles/header.style";
import RoomModal from "./RoomModal";

const Header = ({
  currentTheme,
  setCurrentTheme,
}: {
  currentTheme: string;
  setCurrentTheme: Function;
}) => {
  const router: NextRouter = useRouter();

  const searchRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);

  const user = useSelector(selectUser);

  const handleCreateRoomModal = () => {
    setMenuToggled(false);
    if (!user) return toast.error("login before continue");
    setShowCreateRoomModal(true);
  };

  const toggleTheme = () => {
    const themeToBeSet = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", themeToBeSet);
    setCurrentTheme(themeToBeSet);
  };

  return (
    <>
      {showCreateRoomModal && (
        <RoomModal setShowCreateRoomModal={setShowCreateRoomModal} />
      )}

      <HeaderComponent>
        <Container className="container">
          <Logo
            onClick={() => {
              setMenuToggled(false);
              router.push("/");
            }}
          >
            V
          </Logo>
          <SearchBar onClick={() => searchRef.current?.select()}>
            <FaSearch />
            <input ref={searchRef} type="text" placeholder="search rooms" />
          </SearchBar>
          {menuToggled && <NavOverlay onClick={() => setMenuToggled(false)} />}
          <Nav menuToggled={menuToggled}>
            <NavItem
              onClick={() => {
                setMenuToggled(false);
                router.push("/rooms");
              }}
            >
              <FaThLarge /> Rooms
            </NavItem>
            <NavItem onClick={handleCreateRoomModal}>
              <FaVideo /> Create
            </NavItem>
            <NavItem
              onClick={() => {
                setMenuToggled(false);
                router.push("/me");
              }}
            >
              <FaUser /> Profile
            </NavItem>
            <NavItem>
              <ThemeToggler
                isThemeToggled={currentTheme === "dark"}
                onClick={toggleTheme}
              />
            </NavItem>
          </Nav>
          <Hamburger
            menuToggled={menuToggled}
            onClick={() => setMenuToggled(!menuToggled)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </Hamburger>
        </Container>
      </HeaderComponent>
    </>
  );
};

export default Header;
