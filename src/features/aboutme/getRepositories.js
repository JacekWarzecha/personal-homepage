import axios from "axios";

const githubAPIRepositories =
  "https://api.github.com/users/JacekWarzecha/repos";

export const getRepositories = () =>
  axios.get(githubAPIRepositories).then((response) => response.data);
