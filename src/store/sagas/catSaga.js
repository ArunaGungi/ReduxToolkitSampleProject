import {all, call, put, takeEvery} from "redux-saga/effects";
import {getCatsData} from "../../APIS/catsService";
import { getCats, setCatsFailure, setCatsSuccess } from "../slices/catSlice";

function* catSagaEffect(action) {
    try {
        const response = yield call(getCatsData, action.payload);
        console.log("formatted cats data", response);
        yield put(setCatsSuccess(response));
    }
    catch(error) {
        yield put(setCatsFailure(error));
    }
}

function* catSaga() {
    yield takeEvery("cats/getCats", catSagaEffect);
}

export default catSaga;