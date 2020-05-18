import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  html, body {
    margin: 0px;
    background-color: #000000;
    font-family: --apple-system, Roboto, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
