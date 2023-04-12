import {
  Photo,
  Wrapper,
  Div,
  Paragraph,
  H1,
  Button,
  ThemeButton,
  ThemeButtonArea,
  Mail,
  Icon,
  Link,
  Toggle,
  Brightness,
} from "./styled";
import jack2 from "../images/jack2.png";
import mailArrow from "../images/mailArrow.png";

export const Headline = () => (
  <Wrapper>
    <Photo src={jack2} alt="theme"></Photo>
    <Div>
      <ThemeButtonArea>
        <Paragraph>DARK MODE OFF</Paragraph>
        <ThemeButton>
          <Toggle>
            <Brightness></Brightness>
          </Toggle>
        </ThemeButton>
      </ThemeButtonArea>
      <Paragraph>THIS IS</Paragraph>
      <H1>Jacek Warzecha</H1>
      <Paragraph description>
        I like to create interessing web pages. Currently i' m looking for new
        job opportunities.
      </Paragraph>
      <Link href="mailto:drjackys@gmail.com">
        <Button>
          <Mail>
            <Icon src={mailArrow}></Icon>
          </Mail>
          Hire Me
        </Button>
      </Link>
    </Div>
  </Wrapper>
);
