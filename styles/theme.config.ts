import { createGlobalStyle } from "styled-components";
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
export const lightTheme = {
  brand: "#00BFA6",
  body: "#FFF",
  body2: "#f1f1f1",
  body3: "#eee",
  text: "#363537",
  border: "#ccc",
  border2: "#ddd",
  background: "#363537",
  blue: "#4D96FF",
  red: "#e62236",
  redFade: "#f0303d",
};
export const darkTheme = {
  brand: "#00BFA6",
  body: "#363537",
  body2: "#282729",
  body3: "#272628",
  text: "#FAFAFA",
  border: "#4c4c4c",
  border2: "#4c4c4c",
  background: "#999",
  blue: "#4D96FF",
  red: "#e62236",
  redFade: "#f0303d",
};
type themeType = typeof lightTheme;

export const GlobalStyles = createGlobalStyle<{ theme: themeType }>`
*,*::before,*::after {
  margin: 0;
  padding: 0;
   box-sizing: border-box;
}
/* customizing the scrollbar */
/* width */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.body2};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.brand};
  border-radius: 2rem;
}
/* customizing the scrollbar */

/* removing autocomplete's white background */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}
input:-webkit-autofill {
  background-color: transparent !important;
  -webkit-text-fill-color: ${(props) => props.theme.text} !important;
}
body[data-theme="dark"]{
  
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
    font-family: inherit;
    border:none;
    outline:none;
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
