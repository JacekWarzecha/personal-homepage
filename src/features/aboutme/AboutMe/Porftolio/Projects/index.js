import { Error } from "./Error";
import { Loading } from "./Loading";
import { Project } from "./Project";

export const Projects = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;
    case "loading":
      return <Loading />;
    case "success":
      return <Project repositories={repositories} />;
    case "error":
      return <Error />;
    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
