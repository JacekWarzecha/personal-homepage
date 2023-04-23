import {
  Photo,
  Wrapper,
  Div,
  Paragraph,
  H1,
  Button,
  Mail,
  Icon,
  Link,
} from "./styled";
import jack2 from "../images/jack2.png";
import mailArrow from "../images/mailArrow.png";
import { mail } from "../mail";
import { ThemeSwitch } from "../../../../common/ThemeSwitch";

export const Headline = () => (
  <Wrapper>
    <Photo src={jack2} alt="theme"></Photo>
    <Div>
      {/* <ThemeButtonArea>
        <Paragraph>DARK MODE OFF</Paragraph>
        <ThemeButton>
          <Toggle>
            <Brightness></Brightness>
          </Toggle>
        </ThemeButton>
      </ThemeButtonArea> */}
      <ThemeSwitch />
      <Paragraph>THIS IS</Paragraph>
      <H1>Jacek Warzecha</H1>
      <Paragraph>
        I like to create interessing web pages. Currently i' m looking for new
        job opportunities.
      </Paragraph>
      <Link href={`mailto:${mail}`} title={mail}>
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
