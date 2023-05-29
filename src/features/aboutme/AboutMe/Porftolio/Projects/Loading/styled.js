import styled, { keyframes } from "styled-components";
import { ReactComponent as SpinnerIcon } from "./spinner.svg";

const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;

const rotate = keyframes`
to {
  transform: rotate(360deg)
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled.p`
  padding-top: 64px;
  padding-bottom: 48px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${mobileMax}px) {
    padding-top: 10px;
    text-align: center;
    font-size: 18px;
    padding-bottom: 22px;
  }
`;

export const StyledSpinnerIcon = styled(SpinnerIcon)`
  color: ${({ theme }) => theme.colors.primary};
  animation: ${rotate} 1s linear infinite;
  height: auto;
  margin-bottom: 52px;

  @media (max-width: ${mobileMax}px) {
    margin-bottom: 8px;
    max-width: 94px;
  }
`;
