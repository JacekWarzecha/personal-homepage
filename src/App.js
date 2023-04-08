import { Headline } from "./features/aboutme/Headline";
import { Skills } from "./features/aboutme/Skills";
import Container from "./features/aboutme/Container";
import { Portfolio } from "./features/aboutme/Porftolio";

function App() {
  return (
    <Container>
      <Headline></Headline>
      <Skills />
      <Portfolio />
    </Container>
  );
}

export default App;
