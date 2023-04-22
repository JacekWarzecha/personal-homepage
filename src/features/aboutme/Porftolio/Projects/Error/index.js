import { Wrapper, H3, Paragraph } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <H3>Ooops! Something went wrong...</H3>
      <Paragraph>
        Sorry, failed to load Github projects. <br />
        You can check them directly on Github.
      </Paragraph>
    </Wrapper>
  );
};
