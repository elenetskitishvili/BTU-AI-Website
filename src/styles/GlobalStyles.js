import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 62.5%;
}

body{
    font-family: "Noto Sans Georgian", sans-serif;
}
`;

export default GlobalStyles;
