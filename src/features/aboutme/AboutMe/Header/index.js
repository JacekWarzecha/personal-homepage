import {
  Photo,
  Wrapper,
  DetailsWrapper,
  Paragraph,
  ThisIs,
  Name,
  StyledButtonLink,
  IconEnvelope,
  AboutMe,
} from "./styled";
import jack2 from "../images/jack2.png";
import { mail } from "../mail";
import { ThemeSwitch } from "../../../../common/ThemeSwitch";

export const Header = () => (
  <Wrapper>
    <ThemeSwitch />
    <AboutMe>
      <Photo src={jack2} alt="Jacek_Warzecha"></Photo>
      <DetailsWrapper>
        <ThisIs>THIS IS</ThisIs>
        <Name>Jacek Warzecha</Name>
        <Paragraph>
          I like to create interessing web pages. Currently i' m looking for new
          job opportunities.
        </Paragraph>
        <StyledButtonLink href={`mailto:${mail}`} title={mail}>
          <IconEnvelope />
          Hire me
        </StyledButtonLink>
      </DetailsWrapper>
    </AboutMe>
  </Wrapper>
);
