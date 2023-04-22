import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./getRepositories";
import {
  axiosRepositoriesError,
  axiosRepositoriesSuccess,
  axiosRepositories,
} from "./repositoriesSlice";

function* axiosRepositoriesHandler() {
  try {
    yield delay(2000);
    const repositories = yield call(getRepositories);
    yield put(axiosRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(axiosRepositoriesError());
  }
}

export function* repositoriesSaga() {
  yield takeLatest(axiosRepositories.type, axiosRepositoriesHandler);
}
