import {select} from 'redux-saga/effects';
import {getAppState} from "@stores/selectors/AppStateSelectors";

/**
 * app become active
 */
export function* appBecomeActive() {
  try {
    let appState = yield select(getAppState);
  } catch (err) {
    console.log(err);
  }
}
