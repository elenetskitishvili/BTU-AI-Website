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

    /* 1440px - 9px */
    @media (max-width: 90em) {
        font-size: 56.25%;
    }

    /* 1200px - 8px */
    @media (max-width: 75em) {
        font-size:50%;
    }

    /* 800px - 7px */
    @media (max-width: 50em) {
        font-size:43.75%;
    }

    /* 400px - 6px */
    @media (max-width: 25em) {
        font-size:37.5%;
    }
}

body{
    font-family: "Noto Sans Georgian", sans-serif;
}

h1{
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.26rem;
    text-align: left;
    width: 38.8rem;
    white-space: nowrap;
    border-bottom: 4px solid #FD007D;
    padding-bottom: 1.3rem;
    margin-bottom: 7.3rem;
}
`;

export default GlobalStyles;
