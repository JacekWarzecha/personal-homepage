import { Headline } from "./Headline";
import { Skills } from "./Skills";
import Container from "./Container";
import { Portfolio } from "./Porftolio";
import { Contact } from "./Contact";

export const AboutMe = () => (
  <Container>
    <Headline></Headline>
    <Skills />
    <Portfolio />
    <Contact />
  </Container>
);
