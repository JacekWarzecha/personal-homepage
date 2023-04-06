import {
  Header,
  Content,
  ContentColumn,
  List,
  ListItem,
  Wrapper,
  Title,
  Icon,
} from "./styled";
import imgOwnedSkills from "../images/imgOwnedSkills🛠️.png";

export const Skills = () => (
  <Wrapper>
    <Header>
      <Title>My skillset includes</Title>
      <Icon src={imgOwnedSkills}></Icon>
    </Header>
    <Content>
      <ContentColumn>
        <List before>
          <ListItem>React</ListItem>
          <ListItem>React-Redux</ListItem>
          <ListItem>React-Saga</ListItem>
        </List>
      </ContentColumn>
      <ContentColumn>
        <List>
          <ListItem>JavaScript</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
        </List>
      </ContentColumn>
      <ContentColumn>
        <List>
          <ListItem>Teamwork</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>Markdown</ListItem>
        </List>
      </ContentColumn>
    </Content>
  </Wrapper>
);
