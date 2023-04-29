import { Section, Header, Title, Paragraph, StyledGithubIcon } from "./styled";
import { Projects } from "./Projects";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRepositoriesStatus,
  selectRepositories,
  axiosRepositories,
} from "../../repositoriesSlice";
import { useEffect } from "react";

export const Portfolio = () => {
  const status = useSelector(selectRepositoriesStatus);
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(axiosRepositories());
  }, [dispatch]);
  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <Title>Portfolio</Title>
        <Paragraph>My recent projects</Paragraph>
      </Header>
      <Projects status={status} repositories={repositories} />
    </Section>
  );
};
