// import {
//   API_LOGIN_SUCCESS_ACTION,
//   API_LOGIN_FAIL_ACTION,
//   API_LOGOUT_SUCCESS_ACTION,
//   API_PROFILE_SUCCESS_ACTION,
// } from '../actions/AuthAction';
// import {AuthType} from '@stores/types';

// let defaultState: AuthType = {
//   access_token: '',
//   user: {
//     email: '',
//     avatar: '',
//     first_name: '',
//     last_name: '',
//     id: 0,
//     is_verified: true,
//     balance_amount: 0,
//     total_amount: 0,
//     phone: '',
//     address: '',
//     gender: '0',
//   },
// };

// export const Auth = (state = defaultState, action: any) => {
//   switch (action.type) {
//     case API_LOGIN_SUCCESS_ACTION:
//       return {
//         ...state,
//         access_token: action.access_token,
//         user: action.user,
//       };
//     case API_PROFILE_SUCCESS_ACTION:
//       return {
//         ...state,
//         user: action.user,
//       };
//     case API_LOGIN_FAIL_ACTION:
//       return {
//         ...state,
//         access_token: '',
//       };
//     case API_LOGOUT_SUCCESS_ACTION:
//       return {...defaultState};
//   }
//   return state;
// };
