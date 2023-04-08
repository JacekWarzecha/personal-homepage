import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  padding: 32px;
  margin: auto;
  background: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-rows: auto auto;
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  margin-bottom: 72px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.mineShaft};
  border-bottom: solid 1px ${({ theme }) => theme.color.mercury};
  font-size: 30px;
  padding-bottom: 15px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-right: 16px;
  font-weight: 900;
`;
export const Icon = styled.img`
  width: 27px;
  height: 32px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 18px;
  padding-top: 32px;
  line-height: 140%;
`;
export const ContentColumn = styled.div``;

export const List = styled.ul`
  padding-left: 20px;
`;

export const ListItem = styled.li`
  &::marker {
    color: ${({ theme }) => theme.color.scienceBlue};
  }
`;
