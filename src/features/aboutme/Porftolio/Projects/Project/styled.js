import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

export const Repo = styled.div`
  /* display: flex;
  flex-direction: column; */

  background: ${({ theme }) => theme.color.white};
  padding: 56px 56px 48px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  transition: border 0.3s;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }
`;

export const H3 = styled.h3`
  margin: 0;
  padding-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.scienceBlue};
`;

export const Description = styled.p`
  margin: 0;
  padding-bottom: 24px;
  font-size: 18px;
`;

export const Links = styled.dl`
  margin: 0;
  /* text-decoration: none;
  padding-bottom: 8px; */
`;

export const LinksRow = styled.p`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  padding-bottom: 8px;
`;

export const DT = styled.dt`
  font-size: 18px;
`;

export const LinksValue = styled.dd`
  margin: 0;
  padding-left: 8px;
  font-size: 18px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.scienceBlue};
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
  transition: border-bottom 0.3s;

  &:hover {
    border-bottom: 1px solid rgb(3, 102, 214, 0.8);
  }
`;
