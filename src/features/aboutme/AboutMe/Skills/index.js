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
import tools from "../images/🛠️.svg";
import rocket from "../images/🚀.svg";

export const Skills = () => (
  <>
    <Wrapper>
      <Header>
        <Title>My skillset includes</Title>
        <Icon src={tools}></Icon>
      </Header>
      <Content>
        <ContentColumn>
          <List>
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

    <Wrapper>
      <Header padding>
        <Title>What i want to learn next</Title>
        <Icon src={rocket}></Icon>
      </Header>
      <Content>
        <ContentColumn>
          <List>
            <ListItem>TypeScript</ListItem>
            <ListItem>Tests</ListItem>
          </List>
        </ContentColumn>
        <ContentColumn>
          <List>
            <ListItem>Java</ListItem>
            <ListItem>Sql</ListItem>
          </List>
        </ContentColumn>
        <ContentColumn>
          <List>
            <ListItem>Better design</ListItem>
            <ListItem>Write cleaner code</ListItem>
          </List>
        </ContentColumn>
      </Content>
    </Wrapper>
  </>
);
