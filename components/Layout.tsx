import Head from "next/head";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isThemeToggled, setIsThemeToggled] = useState(false);
  return (
    <>
      <ThemeProvider theme={isThemeToggled ? darkTheme : lightTheme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Courgette&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
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
