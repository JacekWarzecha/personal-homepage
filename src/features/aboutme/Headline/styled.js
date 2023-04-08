import styled, { css } from "styled-components";
import Vector from "../images/Vector.png";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 63px;
`;

export const Photo = styled.img`
  max-width: 398px;
  max-height: 398px;
  padding-right: 66px;
`;

export const Div = styled.div`
  display: grid;
  align-content: center;
`;

export const Paragraph = styled.p`
  font-size: 12px;
  line-height: 130%;
  font-weight: 700;

  ${({ description }) =>
    description &&
    css`
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: 0.05em;
      margin: 0;
      padding-top: 35px;
      padding-bottom: 32px;
    `}
`;

export const H1 = styled.h1`
  margin: 0;
`;

export const Button = styled.button`
  justify-self: start;
  background: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 4px;
  padding: 16px 16px 16px 18px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const ThemeButton = styled.button`
  margin-left: 13px;
  width: 47px;
  height: 25px;
  background-image: url("${Vector}");
  background-size: cover;
  background-position: center;
  /* background: ${({ theme }) => theme.color.iron}; */
  border: solid 1px rgba(209, 213, 218, 0.3);
`;

export const ThemeButtonArea = styled.div`
  display: flex;
  justify-self: end;
`;

export const Mail = styled.div`
  border: 2px solid ${({ theme }) => theme.color.white};
  width: 19px;
  height: 17px;
  margin-right: 19px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

export const Icon = styled.img`
  display: flex;
`;
