import axios from "axios";

export const getRepositories = () =>
  axios
    .get("https://api.github.com/users/JacekWarzecha/repos")
    .then((response) => response.data);
