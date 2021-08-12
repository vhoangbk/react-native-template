import {UPDATE_APP_STATE} from '../actions/AppStateAction';
import {AppStateType} from '@stores/types';

let defaultState: AppStateType = {
  loading: false,
  error: '',
};

export const AppState = (state = defaultState, action: any) => {
  switch (action.type) {
    case UPDATE_APP_STATE:
      return {
        ...state,
        ...action.payload,
      };
  }
  return state;
};
