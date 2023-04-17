import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const Icon = styled.img`
  padding-bottom: 13px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 8px;
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
`;

export const Paragraph = styled.p`
  margin: 0;
  padding-bottom: 24px;
  line-height: 140%;
`;