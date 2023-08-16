import { all, spawn } from "redux-saga/effects";
import catSaga from "./catSaga";

function* rootSaga() {
    yield spawn(catSaga);
}

export default rootSaga;