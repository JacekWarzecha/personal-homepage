import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.mineShaft};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  padding-bottom: 32px;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin: 0;
`;
