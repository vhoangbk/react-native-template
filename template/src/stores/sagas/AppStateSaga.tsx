// import {select} from 'redux-saga/effects';
// import {errorMessage} from '@utils/index';
// import {getAppState} from '@stores/selectors/AppStateSelectors';

// /**
//  * app become active
//  */
// export function* appBecomeActive() {
//   try {
//     let appState = yield select(getAppState);
//     if (appState.current_screen !== 'profile') {
//       // yield put(updateAppStateAction({loading: true}));
//       // yield put(profileAction());
//       // yield put(roomsAction());
//     }
//   } catch (err) {
//     console.log(err);
//     errorMessage(err.message);
//   }
// }
