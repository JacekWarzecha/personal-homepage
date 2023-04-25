import {
  Address,
  LetsTalk,
  Mail,
  Description,
  Wrapper,
  MailWrapper,
} from "./styled";
import { mail } from "../mail";
import { SocialIcons } from "./SocialIcons";

export const Contact = () => {
  return (
    <Wrapper>
      <LetsTalk>LET'S TALK</LetsTalk>
      <Address>
        <MailWrapper>
          <Mail href={`mailto:${mail}`}>{mail}</Mail>
        </MailWrapper>
        <Description>
          We can talk always. If You are looking for a good associate. You came
          to right place.
        </Description>
        <SocialIcons />
      </Address>
    </Wrapper>
  );
};
