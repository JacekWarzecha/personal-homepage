import {
  Photo,
  Wrapper,
  Div,
  Paragraph,
  ThisIs,
  H1,
  StyledButtonLink,
  IconEnvelope,
  AboutMe,
} from "./styled";
import jack2 from "../images/jack2.png";
import { mail } from "../mail";
import { ThemeSwitch } from "../../../../common/ThemeSwitch";

export const Headline = () => (
  <Wrapper>
    <ThemeSwitch />
    <AboutMe>
      <Photo src={jack2} alt="Jacek_Warzecha"></Photo>
      <Div>
        <ThisIs>THIS IS</ThisIs>
        <H1>Jacek Warzecha</H1>
        <Paragraph>
          I like to create interessing web pages. Currently i' m looking for new
          job opportunities.
        </Paragraph>
        <StyledButtonLink href={`mailto:${mail}`} title={mail}>
          <IconEnvelope />
          Hire me
        </StyledButtonLink>
      </Div>
    </AboutMe>
  </Wrapper>
);
