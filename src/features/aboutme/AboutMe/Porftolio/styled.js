import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 88px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
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
`;