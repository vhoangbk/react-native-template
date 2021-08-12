import { put } from "redux-saga/effects";
import { login } from "@services/Auth";
import { ErrorCode } from "@services/Api";
import { updateAppStateAction } from "@stores/actions/AppStateAction";
import {
  loginFailAction,
  loginSuccessAction,
} from "@stores/actions/AuthAction";
import { errorMessage, successMessage } from "@utils/index";

import { userParser } from "@utils/Parser";

/**
 * user login
 */
export function* fetchLogin({ payload }: any) {
  try {
    console.log('fetchLogin')
    yield put(updateAppStateAction({ loading: true }));
    const response = yield login(payload);
    yield put(updateAppStateAction({ loading: false }));
    if (response.error.errorCode === ErrorCode.NONE) {
      let dataParser = userParser(response.data);
      yield put(loginSuccessAction(dataParser));
      successMessage("Login Success");
    } else {
      yield put(loginFailAction({}));
      yield put(updateAppStateAction({ loading: false }));
      errorMessage(response.error.message);
    }
  } catch (err) {
    console.log(err);
    yield put(updateAppStateAction({ loading: false }));
    yield put(loginFailAction(err));
    errorMessage(err.message);
  }
}
