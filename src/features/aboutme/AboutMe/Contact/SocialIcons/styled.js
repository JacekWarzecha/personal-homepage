import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    ${({ theme }) => theme.colors.primary}
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: auto;
`;
