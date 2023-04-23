import { all } from "redux-saga/effects";
import { repositoriesSaga } from "../features/aboutme/repositoriesSaga";

export default function* rootSaga() {
  yield all([repositoriesSaga()]);
}
