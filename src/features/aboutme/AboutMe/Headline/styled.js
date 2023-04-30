import styled from "styled-components";
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
