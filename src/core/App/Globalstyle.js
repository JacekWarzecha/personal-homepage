import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const Globalstyle = createGlobalStyle`

${normalize}

html {
  box-sizing: border-box;
}
  
*,
::after,
::before {
 box-sizing: inherit;
}

#root {
  transition: background 0.3s;
  background: ${({ theme }) => theme.colors.site.background};
  color: ${({ theme }) => theme.colors.site.text};
  font-family: 'Inter', sans-serif;
  font-style: normal;
  word-break: break-word;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height:140%;
}
`;
