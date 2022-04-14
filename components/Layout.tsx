import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isThemeToggled, setIsThemeToggled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const theme: string = JSON.parse(localStorage.getItem("theme") as string);
      if (theme === "dark") return setIsThemeToggled(true);
      setIsThemeToggled(false);
    }
  }, []);

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
