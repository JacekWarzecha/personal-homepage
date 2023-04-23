import { Address, Paragraph, Mail, Description } from "./styled";
import { mail } from "../mail";
import { SocialIcons } from "./SocialIcons";

export const Contact = () => {
  return (
    <Address>
      <Paragraph>LET'S TALK</Paragraph>
      <Mail href={`mailto:${mail}`}>{mail}</Mail>
      <Description>
        We can talk always. If You are looking for a good associate. You came to
        right place.
      </Description>
      <SocialIcons />
    </Address>
  );
};
