import styled from "styled-components";
import { ReactComponent as DangerIcon } from "./Danger.svg";
import { ButtonLink } from "../../../ButtonLink";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDangerIcon = styled(DangerIcon)`
  margin-top: 95px;
  margin-bottom: 23px;
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
  margin: 0 0 32px;
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 25px;
  line-height: 24px;
`;
