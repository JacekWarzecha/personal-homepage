import { ReactComponent as GithubIcon } from "./icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedinIcon.svg";
import { styleIcon } from "./styled";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/JacekWarzecha?tab=repositories",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jacek-warzecha-525622243/",
    Icon: styleIcon(LinkedinIcon),
  },
];
