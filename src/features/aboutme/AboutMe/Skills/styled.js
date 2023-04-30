import styled, { css } from "styled-components";

export const Section = styled.section`
  padding: 32px 32px 24px;
  background: ${({ theme }) => theme.colors.boxBackground};
  display: grid;
  grid-template-rows: auto auto;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 72px;
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
    `}//Zastanawiam się gdybym chciał teraz przekazać padding
    //dla header w drugiek sekcji jakbym miał to zrobić?
`;

export const Title = styled.h2`
  margin: 0;
  padding-right: 16px;
  font-weight: 900;
  line-height: 36px;
  font-size: 30px;
`;
export const Icon = styled.img`
  width: 27px;
  height: 32px;
`;

export const List = styled.ul`
  padding-left: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 18px;
  padding-top: 32px;
  line-height: 140%;
`;

export const ListItem = styled.li`
  padding-bottom: 8px;
  &::marker {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
