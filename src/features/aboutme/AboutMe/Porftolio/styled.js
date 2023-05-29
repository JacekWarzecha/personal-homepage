import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./githubIcon.svg";

const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledGithubIcon = styled(GithubIcon)`
  margin-bottom: 13px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${mobileMax}px) {
    max-width: 32px;
    max-height: 32px;
  }
`;

export const Section = styled.div`
  margin-bottom: 120px;

  @media (max-width: ${mobileMax}px) {
    margin-bottom: 48px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 8px;
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;

  @media (max-width: ${mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  padding-bottom: 24px;

  @media (max-width: ${mobileMax}px) {
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.05em;
  }
`;
