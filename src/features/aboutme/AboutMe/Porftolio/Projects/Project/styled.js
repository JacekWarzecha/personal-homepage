import styled from "styled-components";
import α from "color-alpha";

const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const Repo = styled.div`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 56px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media (max-width: ${mobileMax}px) {
    padding: 24px 24px 26px;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  padding-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.tile.header};

  @media (max-width: ${mobileMax}px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
  }
`;

export const Description = styled.p`
  margin: 0;
  padding-bottom: 24px;
  font-size: 18px;

  @media (max-width: ${mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
  }
`;

export const Links = styled.dl`
  margin: 0;
`;

export const LinksRow = styled.p`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  padding-bottom: 8px;

  @media (max-width: ${mobileMax}px) {
    padding-bottom: 10px;
  }
`;

export const DT = styled.dt`
  font-size: 18px;

  @media (max-width: ${mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
  }
`;

export const LinksValue = styled.dd`
  margin: 0;
  padding-left: 8px;
  font-size: 18px;

  @media (max-width: ${mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.3)};
  transition: border-bottom-color 0.3s;

  &:hover {
    border-color: unset;
  }
`;
