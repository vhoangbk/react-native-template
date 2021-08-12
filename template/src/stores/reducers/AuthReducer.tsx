import {
  API_LOGIN_SUCCESS_ACTION,
  API_LOGIN_FAIL_ACTION,
} from '../actions/AuthAction';
import {User} from "../types/User";

let defaultState: User = {
    access_token: '',
    email: '',
    avatar: '',
    first_name: '',
};

export const Auth = (state = defaultState, action: any) => {
  switch (action.type) {
    case API_LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        user: action.user,
      };
    case API_LOGIN_FAIL_ACTION:
      return defaultState;
  }
  return state;
};
