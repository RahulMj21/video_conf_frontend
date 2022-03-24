import { createGlobalStyle, ThemedStyledInterface } from "styled-components";
export const lightTheme = {
  brand: "#00BFA6",
  body: "#FFF",
  text: "#363537",
  border: "#ddd",
  background: "#363537",
};
export const darkTheme = {
  brand: "#00BFA6",
  body: "#363537",
  text: "#FAFAFA",
  border: "#4c4c4c",
  background: "#999",
};
type themeType = typeof lightTheme;

export const GlobalStyles = createGlobalStyle<{ theme: themeType }>`
*,*::before,*::after {
  margin: 0;
  padding: 0;
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   font-family:"Ubuntu", sans-serif !important;
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}
section{
  padding-top: 5.8rem;
  min-height:100vh !important;
}
input, textarea, button {
    font-family: inherit
}
a{
    text-decoration: none;
    color: inherit;
}
ul,ol{
    list-style: none;
}
img{
    max-width:100%;
    display:block;
}
`;
