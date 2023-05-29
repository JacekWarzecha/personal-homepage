import styled, { css } from "styled-components";
import { ReactComponent as sun } from "./sun.svg";

const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  outline-offset: 8px;
`;

export const Paragraph = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 12px;

  @media (max-width: ${mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  display: flex;
  border: 1px solid;
  padding: 3px;
  border-radius: 12px;
  width: 48px;
`;

export const IconWrapper = styled.span`
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(sun)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
