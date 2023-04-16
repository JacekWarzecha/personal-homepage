import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    axiosRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    axiosRepositoriesSuccess: (_, { payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    axiosRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

const selectRepositoriesState = (state) => state.repositories;

export const selectRepositories = (state) =>
  selectRepositoriesState(state).repositories;

export const selectRepositoriesStatus = (state) =>
  selectRepositoriesState(state).status;

export const {
  axiosRepositories,
  axiosRepositoriesSuccess,
  axiosRepositoriesError,
} = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
