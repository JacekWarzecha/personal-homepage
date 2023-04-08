import { Wrapper, Header, Icon, Title, Paragraph, Projects } from "./styled";
import Shape from "../images/Shape.png";

export const Portfolio = () => (
  <Wrapper>
    <Header>
      <Icon src={Shape}></Icon>
      <Title>Portfolio</Title>
      <Paragraph>My recent projects</Paragraph>
    </Header>
    <Projects></Projects>
  </Wrapper>
);
