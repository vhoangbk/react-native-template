// import {UPDATE_APP_STATE} from '../actions/AppStateAction';
// import {API_LOGOUT_SUCCESS_ACTION} from '../actions/AuthAction';
// import {AppStateType} from '@stores/types';

// let defaultState: AppStateType = {
//   loading: false,
//   error: '',
//   current_screen: '',
//   progress_indicator: false,
//   infoMessage: {
//     title: '',
//     isVisible: false,
//     message: '',
//   },
//   modal_topup_visible: false,
//   modal_note_visible: false,
//   modal_rate_visible: false,
// };

// export const AppState = (state = defaultState, action: any) => {
//   switch (action.type) {
//     case UPDATE_APP_STATE:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     case API_LOGOUT_SUCCESS_ACTION:
//       return {...defaultState};
//   }
//   return state;
// };
