import { Header } from "./Header";
import { Skills } from "./Skills";
import Container from "./Container";
import { Portfolio } from "./Porftolio";
import { Contact } from "./Contact";
import tools from "./images/🛠️.svg";
import rocket from "./images/🚀.svg";
import { skills, nextSkills } from "./skillsData";

export const AboutMe = () => (
  <Container>
    <Header />
    <main>
      <Skills title="My skillset includes" icon={tools} skills={skills} />
      <Skills
        title="What I want to learn next"
        icon={rocket}
        skills={nextSkills}
      />
      <Portfolio />
    </main>
    <Contact />
  </Container>
);
