import { createGlobalStyle, css } from "styled-components";

const fontFace = (
  name: string,
  src: string,
  fontWeight: string | number = "normal",
  fontStyle = "normal"
) => css`
    @font-face {
      font-family: "${name}";
      src: url('/fonts/${src}.woff2') format('woff2'), url('/fonts/${src}.woff') format('woff');
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }
  `;

export default createGlobalStyle`
  ${fontFace("cerebri-sans", "cerebri-sans/CerebriSans-Medium", 500)}
  ${fontFace("cerebri-sans", "cerebri-sans/CerebriSans-Regular", 400)}

  html, body {
    margin: 0px;
    background-color: #CEBBF8;
    font-family: 'cerebri-sans', --apple-system, Roboto, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
