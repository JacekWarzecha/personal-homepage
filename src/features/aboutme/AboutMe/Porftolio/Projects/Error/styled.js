import styled from "styled-components";
import { ReactComponent as DangerIcon } from "./Danger.svg";
import { ButtonLink } from "../../../ButtonLink";

const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDangerIcon = styled(DangerIcon)`
  margin-top: 95px;
  margin-bottom: 23px;
  max-width: 37px;
  max-height: 33px;

  @media (max-width: ${mobileMax}px) {
    margin-top: 12px;
    margin-bottom: 10px;
    max-width: 33px;
    max-height: 29px;
  }
`;

export const ErrorTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  padding-bottom: 32px;

  @media (max-width: ${mobileMax}px) {
    text-align: center;
    font-size: 18px;
    line-height: 140%;
    padding-bottom: 20px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  margin: 0 0 32px;

  @media (max-width: ${mobileMax}px) {
    font-size: 14px;
    line-height: 140%;
    margin: 0px 0px 20px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 25px;
  line-height: 24px;

  @media (max-width: ${mobileMax}px) {
    font-size: 16px;
    margin-bottom: 18px;
  }
`;
