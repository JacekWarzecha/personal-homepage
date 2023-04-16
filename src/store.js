import { configureStore } from "@reduxjs/toolkit";
import repositoriesReducer from "./features/aboutme/repositoriesSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
