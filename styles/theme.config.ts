import { createGlobalStyle, ThemedStyledInterface } from 'styled-components'
export const lightTheme = {
    body: '#fffff',
    main: '#5C14DB',
    mainColor: '#FFFFFF',
    accent: '#E5DE17',
    accentColor: '#161616',
    secondary: '#FFFFFF',
    secondaryColor: '#343434',
    dullColor: '#343434',
    ternary: '#000000',
    codeColor: '#D121C5',
}
type themeType = typeof lightTheme

export const GlobalStyles = createGlobalStyle<{theme:themeType}>`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   background: ${({theme}) =>theme.body};
   color: ${({ theme }) => theme.main};
   font-family: sans-serif !important;
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}
input, textarea, button {
    font-family: inherit
}
a{
    text-decoration: none;
}
ul,ol{
    list-style: none;
}
img{
    max-width:100%;
    display:block;
}

`