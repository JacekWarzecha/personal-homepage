import styled from "styled-components";

export const Address = styled.address`
  display: grid;
  grid-template-rows: auto auto auto auto;
  font-style: normal;
`;

export const Paragraph = styled.p`
  font-size: 12px;
  letter-spacing: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 0;
  padding-bottom: 24px;
`;

export const Mail = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  padding-bottom: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 670px;
  font-size: 18px;
  margin: 0;
  padding-bottom: 56px;
`;

// export const Icons = styled.dl`
//   display: flex;
//   margin: 0;
// `;

// export const IconLink = styled.a`
//   margin-right: 24px;
//   margin-bottom: 109px;
// `;