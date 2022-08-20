import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config";
import Header from "./Header";

const Layout = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(
      document.body.dataset.theme ? document.body.dataset.theme : "light"
    );
  }, []);

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
