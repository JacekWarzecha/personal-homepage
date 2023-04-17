import { Headline } from "./features/aboutme/Headline";
import { Skills } from "./features/aboutme/Skills";
import Container from "./features/aboutme/Container";
import { Portfolio } from "./features/aboutme/Porftolio";
import { Contact } from "./features/aboutme/Contact";

function App() {
  return (
    <Container>
      <Headline></Headline>
      <Skills />
      <Portfolio />
      <Contact />
    </Container>
  );
}

export default App;
