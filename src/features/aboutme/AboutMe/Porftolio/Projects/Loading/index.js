import { Paragraph, Wrapper, StyledSpinnerIcon } from "./styled";

export const Loading = () => {
  return (
    <Wrapper>
      <Paragraph>Please wait, projects are being loaded...</Paragraph>
      <StyledSpinnerIcon />
    </Wrapper>
  );
};
