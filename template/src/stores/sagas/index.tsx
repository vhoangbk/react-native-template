// import {APP_BECOME_ACTIVE} from '@stores/actions/AppStateAction';
// import {
//   API_MAPPING_USER_ACTION,
//   API_UPSERT_DEVICE_ACTION,
// } from '@stores/actions/DeviceAction';
// import {API_FEEDBACK_ACTION} from '@stores/actions/FeedBackAction';
// import {
//   API_DELETE_NOTIFICATIONS_ACTION,
//   API_GET_NOTIFICATIONS_ACTION,
//   API_SHOW_NOTIFICATION_ACTION,
// } from '@stores/actions/NotificationAction';
// import {
//   API_PAY_IN_ACTION,
//   API_PAY_IN_HISTORY_ACTION,
//   API_PAY_IN_LOAD_MORE_HISTORY_ACTION,
// } from '@stores/actions/PayAction';
// import {
//   API_ANALYTICS_ROOM_ACTION,
//   API_REPORT_USER_ACTION,
// } from '@stores/actions/ReportAction';
// import {
//   API_GET_ROOMS_ACTION,
//   API_ROOMS_ACTION,
//   API_ROOM_ADD_MEMBER_ACTION,
//   API_ROOM_JOIN_ACTION,
//   API_ROOM_CREATE_ACTION,
//   API_ROOM_CREATE_CATEGORY_ACTION,
//   API_ROOM_DELETE_ACTION,
//   API_ROOM_DELETE_CATEGORY_ACTION,
//   API_ROOM_DETAIL_ACTION,
//   API_ROOM_HOME_PAGE_ACTION,
//   API_ROOM_REMOVE_MEMBER_ACTION,
//   API_ROOM_RENAME_ACTION,
//   API_ROOM_USER_SUGGESTION_ACTION,
//   API_ROOM_UPDATE_CATEGORY_ACTION,
//   API_ROOM_GET_CATEGORIES_ICON_ACTION,
// } from '@stores/actions/RoomAction';
// import {API_FIND_USERS_ACTION} from '@stores/actions/SearchAction';
// import {
//   API_FILTER_TRANSACTIONS_ACTION,
//   API_FILTER_TRANSACTIONS_HISTORY_ACTION,
//   API_GET_TRANSACTIONS_ACTION,
//   API_LOADMORE_TRANSACTIONS_ACTION,
//   API_REFRESH_TRANSACTIONS_ACTION,
//   API_TRANSACTIONS_CREATE_ACTION,
//   API_TRANSACTIONS_DELETE_ACTION,
//   API_TRANSACTIONS_DETAIL_ACTION,
//   API_TRANSACTIONS_HISTORY_ACTION,
//   API_TRANSACTIONS_HISTORY_LOAD_MORE_ACTION,
//   API_TRANSACTIONS_UPDATE_ACTION,
// } from '@stores/actions/TransactionAction';
// import {takeLatest, all} from 'redux-saga/effects';
// import {
//   API_LOGIN_ACTION,
//   API_REGISTER_ACTION,
//   API_LOGOUT_ACTION,
//   API_PROFILE_ACTION,
//   GOOGLE_LOGIN_ACTION,
//   FACEBOOK_LOGIN_ACTION,
//   API_FORGOT_PASSWORD_ACTION,
//   API_RESET_PASSWORD_ACTION,
//   API_CHANGE_PASSWORD_ACTION,
//   API_UPDATE_USER_ACTION,
//   APPLE_LOGIN_ACTION,
// } from '../actions/AuthAction';
// import {appBecomeActive} from './AppStateSaga';
// import {
//   appleLogin,
//   facebookLogin,
//   fetchChangePassword,
//   fetchForgotPassword,
//   fetchLogin,
//   fetchLogout,
//   fetchProfile,
//   fetchRegister,
//   fetchResetPassword,
//   fetchUpdateUser,
//   googleLogin,
// } from './AuthSaga';
// import {fetchMappingUser, fetchUpsertDevice} from './DeviceSaga';
// import {fetchFeedback} from './FeedbackSaga';
// import {
//   fetchDeleteNotifications,
//   fetchGetNotifications,
//   fetchShowNotification,
// } from './NotificationSaga';
// import {
//   fetchPayIn,
//   fetchPayInHistory,
//   fetchPayInLoadMoreHistory,
// } from './PayInSaga';
// import {fetchAnalyticsRoom, fetchReportUser} from './ReportSaga';
// import {
//   fetchRoomDetail,
//   fetchRoomRename,
//   fetchRooms,
//   fetchRoomCreate,
//   fetchRoomDelete,
//   fetchRoomCreateCategory,
//   fetchRoomDeleteCategory,
//   fetchRoomHomePage,
//   fetchRemoveMember,
//   fetchAddMember,
//   fetchGetRooms,
//   fetchUserSuggestion,
//   fetchRoomUpdateCategory,
//   fetchRoomCategoriesIcon,
//   fetchJoinRoom,
// } from './RoomSaga';
// import {fetchFindUsers} from './SearchSaga';
// import {
//   fetchCreateTransactions,
//   fetchDeleteTransactions,
//   fetchDetailTransactions,
//   fetchFilterHistoryTransactions,
//   fetchFilterTransactions,
//   fetchHistoryTransactions,
//   fetchLoadMoreTransactions,
//   fetchTransactions,
//   fetchUpdateTransactions,
//   loadMoreHistoryTransactions,
// } from './TransactionSaga';

// export function* rootSaga() {
//   yield all([
//     takeLatest(API_LOGIN_ACTION, fetchLogin),
//     takeLatest(API_LOGOUT_ACTION, fetchLogout),
//     takeLatest(API_REGISTER_ACTION, fetchRegister),
//     takeLatest(API_PROFILE_ACTION, fetchProfile),
//     takeLatest(API_ROOMS_ACTION, fetchRooms),
//     takeLatest(API_GET_ROOMS_ACTION, fetchGetRooms),
//     takeLatest(API_ROOM_DETAIL_ACTION, fetchRoomDetail),
//     takeLatest(API_ROOM_RENAME_ACTION, fetchRoomRename),
//     takeLatest(API_ROOM_CREATE_ACTION, fetchRoomCreate),
//     takeLatest(API_ROOM_DELETE_ACTION, fetchRoomDelete),
//     takeLatest(API_ROOM_CREATE_CATEGORY_ACTION, fetchRoomCreateCategory),
//     takeLatest(API_ROOM_UPDATE_CATEGORY_ACTION, fetchRoomUpdateCategory),
//     takeLatest(API_ROOM_DELETE_CATEGORY_ACTION, fetchRoomDeleteCategory),
//     takeLatest(API_PAY_IN_ACTION, fetchPayIn),
//     takeLatest(API_PAY_IN_HISTORY_ACTION, fetchPayInHistory),
//     takeLatest(API_PAY_IN_LOAD_MORE_HISTORY_ACTION, fetchPayInLoadMoreHistory),
//     takeLatest(API_ROOM_HOME_PAGE_ACTION, fetchRoomHomePage),
//     takeLatest(API_UPSERT_DEVICE_ACTION, fetchUpsertDevice),
//     takeLatest(API_MAPPING_USER_ACTION, fetchMappingUser),
//     takeLatest(API_GET_NOTIFICATIONS_ACTION, fetchGetNotifications),
//     takeLatest(API_FIND_USERS_ACTION, fetchFindUsers),
//     takeLatest(API_ROOM_REMOVE_MEMBER_ACTION, fetchRemoveMember),
//     takeLatest(API_ROOM_ADD_MEMBER_ACTION, fetchAddMember),
//     takeLatest(API_ROOM_JOIN_ACTION, fetchJoinRoom),
//     takeLatest(API_ROOM_USER_SUGGESTION_ACTION, fetchUserSuggestion),
//     takeLatest(API_FEEDBACK_ACTION, fetchFeedback),
//     takeLatest(
//       [API_GET_TRANSACTIONS_ACTION, API_REFRESH_TRANSACTIONS_ACTION],
//       fetchTransactions,
//     ),
//     takeLatest(API_LOADMORE_TRANSACTIONS_ACTION, fetchLoadMoreTransactions),
//     takeLatest(API_FILTER_TRANSACTIONS_ACTION, fetchFilterTransactions),
//     takeLatest(GOOGLE_LOGIN_ACTION, googleLogin),
//     takeLatest(APPLE_LOGIN_ACTION, appleLogin),
//     takeLatest(FACEBOOK_LOGIN_ACTION, facebookLogin),
//     takeLatest(API_TRANSACTIONS_DELETE_ACTION, fetchDeleteTransactions),
//     takeLatest(API_TRANSACTIONS_DETAIL_ACTION, fetchDetailTransactions),
//     takeLatest(API_REPORT_USER_ACTION, fetchReportUser),
//     takeLatest(API_DELETE_NOTIFICATIONS_ACTION, fetchDeleteNotifications),
//     takeLatest(API_SHOW_NOTIFICATION_ACTION, fetchShowNotification),
//     takeLatest(API_TRANSACTIONS_CREATE_ACTION, fetchCreateTransactions),
//     takeLatest(API_TRANSACTIONS_UPDATE_ACTION, fetchUpdateTransactions),
//     takeLatest(API_TRANSACTIONS_HISTORY_ACTION, fetchHistoryTransactions),
//     takeLatest(
//       API_TRANSACTIONS_HISTORY_LOAD_MORE_ACTION,
//       loadMoreHistoryTransactions,
//     ),
//     takeLatest(API_FORGOT_PASSWORD_ACTION, fetchForgotPassword),
//     takeLatest(API_RESET_PASSWORD_ACTION, fetchResetPassword),
//     takeLatest(
//       API_FILTER_TRANSACTIONS_HISTORY_ACTION,
//       fetchFilterHistoryTransactions,
//     ),
//     takeLatest(API_ANALYTICS_ROOM_ACTION, fetchAnalyticsRoom),
//     takeLatest(API_CHANGE_PASSWORD_ACTION, fetchChangePassword),
//     takeLatest(API_UPDATE_USER_ACTION, fetchUpdateUser),
//     takeLatest(APP_BECOME_ACTIVE, appBecomeActive),
//     takeLatest(API_ROOM_GET_CATEGORIES_ICON_ACTION, fetchRoomCategoriesIcon),
//   ]);
// }
