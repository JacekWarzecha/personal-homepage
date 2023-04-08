import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
  
*,
::after,
::before {
 box-sizing: inherit;
}

#root {
    max-width: 1920px;
    margin: auto;
    background: ${({ theme }) => theme.color.mercury};
    color: ${({ theme }) => theme.color.slateGrey};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    min-height: 100vh;
    word-break: break-word;
    font-size: 20px;
    font-weight: 400;
}

`;
