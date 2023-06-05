import {
  Wrapper,
  ErrorTitle,
  Paragraph,
  StyledDangerIcon,
  StyledButtonLink,
} from "./styled";
import { socials } from "../../../Contact/SocialIcons/social";

export const Error = () => {
  return (
    <Wrapper>
      <StyledDangerIcon />
      <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
      <Paragraph>
        Sorry, failed to load Github projects. <br />
        You can check them directly on Github.
      </Paragraph>
      <StyledButtonLink
        href={socials[0].url}
        target="_blank"
        title={socials[0].url}
        rel="noreferrer"
      >
        Go to Github
      </StyledButtonLink>
    </Wrapper>
  );
};
