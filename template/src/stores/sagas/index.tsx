import { takeLatest, all } from "redux-saga/effects";
import { API_LOGIN_ACTION } from "../actions/AuthAction";
import { fetchLogin } from "./AuthSaga";

export function* rootSaga() {
  yield all([takeLatest(API_LOGIN_ACTION, fetchLogin)]);
}
