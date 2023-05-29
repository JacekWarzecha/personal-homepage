import styled, { css } from "styled-components";

const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;

export const Section = styled.section`
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  display: grid;
  grid-template-rows: auto auto;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 72px;

  @media (max-width: ${mobileMax}px) {
    padding: 16px;
    margin-bottom: 50px;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: solid 1px ${({ theme }) => theme.colors.headerLine};
  font-size: 30px;
  padding-bottom: 15px;

  ${({ padding }) =>
    padding &&
    css`
      padding-bottom: 18px;
    `} //Zastanawiam się gdybym chciał teraz przekazać padding
    //dla header w drugiek sekcji jakbym miał to zrobić?

    @media (max-width: ${mobileMax}px) {
    padding-bottom: 12px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding-right: 16px;
  font-weight: 900;
  line-height: 36px;
  font-size: 30px;

  @media (max-width: ${mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    padding-right: 12px;
  }
`;
export const Icon = styled.img`
  width: 27px;
  height: 32px;

  @media (max-width: ${mobileMax}px) {
    width: 18px;
    height: 21px;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 18px;
  padding-top: 32px;
  line-height: 140%;

  @media (max-width: ${mobileMax}px) {
    grid-template-columns: 1fr;
    padding-top: 12px;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
  }
`;

export const ListItem = styled.li`
  padding-bottom: 8px;
  &::marker {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
