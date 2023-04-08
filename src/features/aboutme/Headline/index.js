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
} from "./styled";
import jack1 from "../images/jack1.jpg";
import mailArrow from "../images/mailArrow.png";

export const Headline = () => (
  <Wrapper>
    <Photo src={jack1}></Photo>
    <Div>
      <ThemeButtonArea>
        <Paragraph>DARK MODE OFF</Paragraph>
        <ThemeButton>ICON</ThemeButton>
      </ThemeButtonArea>
      <Paragraph>THIS IS</Paragraph>
      <H1>Jacek Warzecha</H1>
      <Paragraph description>
        I like to create interessing web pages. Currently i' m looking for new
        job opportunities.
      </Paragraph>
      <Button>
        <Mail>
          <Icon src={mailArrow}></Icon>
        </Mail>
        Hire Me
      </Button>
    </Div>
  </Wrapper>
);
