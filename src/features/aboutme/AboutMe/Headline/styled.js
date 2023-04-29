import styled, { css } from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopeIcon } from "../images/Message.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 63px;
`;

export const Photo = styled.img`
  max-width: 398px;
  max-height: 398px;
  padding-right: 66px;
  background: ${({ theme }) => theme.colors.site.background};
`;

export const Div = styled.div`
  display: grid;
  align-content: center;
`;

export const ThisIs = styled.p`
  color: ${({ theme }) => theme.colors.site.text};
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: initial;
  padding-bottom: 12px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin: 0;
  padding-top: 35px;
  padding-bottom: 32px;
  max-width: 650px;
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  justify-self: start;
`;

export const IconEnvelope = styled(EnvelopeIcon)`
  margin-right: 19px;
`;

// export const Link = styled.a`
//   display: flex;
//   justify-self: start;
//   text-decoration: none;
// `;

// export const Button = styled.button`
//   background: ${({ theme }) => theme.colors.primary};
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 16px 16px 16px 18px;
//   font-weight: 600;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   transition: box-shadow 0.3s;

//   &:hover {
//     cursor: pointer;
//     box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
//       -2px -2px 0px #8cc2ff;
//   }
// `;

// export const Mail = styled.div`
//   border: 2px solid currentColor;
//   width: 19px;
//   height: 17px;
//   margin-right: 19px;
//   display: flex;
//   align-items: center;
//   border-radius: 4px;
// `;

// export const Icon = styled.img`
//   display: flex;
// `;
