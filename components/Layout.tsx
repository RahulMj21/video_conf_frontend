import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isThemeToggled, setIsThemeToggled] = useState(false);
  return (
    <>
      <ThemeProvider theme={isThemeToggled ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header
          isThemeToggled={isThemeToggled}
          setIsThemeToggled={setIsThemeToggled}
        />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
