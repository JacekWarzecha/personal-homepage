import {
  Address,
  Paragraph,
  Mail,
  Description,
  Icons,
  IconLink,
} from "./styled";
import { ReactComponent as GithubIcon } from "../images/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../images/linkedinIcon.svg";
import { mail } from "../../aboutme/mail";

export const Contact = () => {
  return (
    <Address>
      <Paragraph>LET'S TALK</Paragraph>
      <Mail href={`mailto:${mail}`}>{mail}</Mail>
      <Description>
        We can talk always. If You are looking for a good associate. You came to
        right place.
      </Description>
      <Icons>
        <IconLink
          href="https://github.com/JacekWarzecha?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/jacek-warzecha-525622243/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </IconLink>
      </Icons>
    </Address>
  );
};
