import styled, { keyframes } from "styled-components";
import { ReactComponent as SpinnerIcon } from "./spinner.svg";

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
`;

export const StyledSpinnerIcon = styled(SpinnerIcon)`
  color: ${({ theme }) => theme.colors.primary};
  animation: ${rotate} 1s linear infinite;
  height: auto;
  margin-bottom: 52px;
`;
