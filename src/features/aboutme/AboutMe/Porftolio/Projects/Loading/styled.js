import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled.p`
  padding-top: 64px;
  padding-bottom: 48px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
