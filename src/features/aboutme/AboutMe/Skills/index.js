import { Header, List, ListItem, Section, Title, Icon } from "./styled";

export const Skills = ({ title, icon, skills }) => (
  <Section>
    <Header>
      <Title>
        {title}
        <Icon src={icon}></Icon>
      </Title>
    </Header>
    <List>
      {skills.map((skill) => (
        <ListItem key={skill}> {skill}</ListItem>
      ))}
    </List>
  </Section>
);
