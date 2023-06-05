import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopeIcon } from "../images/Message.svg";

const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.header`
  margin-bottom: 63px;

  @media (max-width: ${mobileMax}px) {
    margin-bottom: 48px;
  }
`;

export const AboutMe = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: -30px;

  @media (max-width: ${mobileMax}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  max-width: 398px;
  max-height: 398px;
  padding-right: 66px;
  background: ${({ theme }) => theme.colors.site.background};

  @media (max-width: ${mobileMax}px) {
    width: 132px;
    padding-right: 0;
    margin-bottom: 12px;
  }
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
  margin-bottom: 12px;

  @media (max-width: ${mobileMax}px) {
    margin-bottom: 8px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin: 0;
  margin-top: 35px;
  margin-bottom: 32px;
  max-width: 650px;

  @media (max-width: ${mobileMax}px) {
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 17px;
    letter-spacing: 0.05em;
  }
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${mobileMax}px) {
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.05em;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  justify-self: start;

  @media (max-width: ${mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
  }
`;

export const IconEnvelope = styled(EnvelopeIcon)`
  margin-right: 19px;
  max-width: 19px;
  max-height: 17px;

  @media (max-width: ${mobileMax}px) {
    max-width: 16px;
    max-height: 14px;
  }
`;
