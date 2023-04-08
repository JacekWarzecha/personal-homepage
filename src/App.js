import { Headline } from "./features/aboutme/Headline";
import { Skills } from "./features/aboutme/Skills";
import Container from "./features/aboutme/Container";

function App() {
  return (
    <Container>
      <Headline></Headline>
      <Skills />
    </Container>
  );
}

export default App;
