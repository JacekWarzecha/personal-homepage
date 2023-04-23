import { Wrapper, Header, Icon, Title, Paragraph } from "./styled";
import Shape from "../AboutMe/images/Shape.png";
import { Projects } from "./Projects";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRepositoriesStatus,
  selectRepositories,
} from "../repositoriesSlice";
import { axiosRepositories } from "../repositoriesSlice";
import { useEffect } from "react";

export const Portfolio = () => {
  const status = useSelector(selectRepositoriesStatus);
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(axiosRepositories());
  }, [dispatch]);
  return (
    <Wrapper>
      <Header>
        <Icon src={Shape}></Icon>
        <Title>Portfolio</Title>
        <Paragraph>My recent projects</Paragraph>
      </Header>
      <Projects status={status} repositories={repositories} />
    </Wrapper>
  );
};
