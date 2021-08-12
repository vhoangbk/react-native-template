import {AppState} from './AppStateReducer';
import {combineReducers} from 'redux';
import {Auth} from "@stores/reducers/AuthReducer";

const allReducers = combineReducers({
  appState: AppState,
  auth: Auth,
});

export default allReducers;
