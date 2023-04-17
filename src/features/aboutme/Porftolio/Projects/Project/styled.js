import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Repo = styled.div`
  display: flex;
  flex-direction: column;
  width: 592px;
  margin: 0 32px 32px 0;
  background: ${({ theme }) => theme.color.white};
  padding: 56px 56px 48px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
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
`;

export const Link = styled.a`
  text-decoration: none;
  padding-bottom: 8px;
`;
