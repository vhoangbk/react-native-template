// /**
//  * login
//  */
// export const API_LOGIN_ACTION = 'API_LOGIN_ACTION';
// export const API_LOGIN_SUCCESS_ACTION = 'API_LOGIN_SUCCESS_ACTION';
// export const API_LOGIN_FAIL_ACTION = 'API_LOGIN_FAIL_ACTION';
// /**
//  * google login
//  */
// export const GOOGLE_LOGIN_ACTION = 'GOOGLE_LOGIN_ACTION';
// /**
//  * google login
//  */
// export const APPLE_LOGIN_ACTION = 'APPLE_LOGIN_ACTION';
// /**
//  * facebook login
//  */
// export const FACEBOOK_LOGIN_ACTION = 'FACEBOOK_LOGIN_ACTION';
// /**
//  * register
//  */
// export const API_REGISTER_ACTION = 'API_REGISTER_ACTION';
// /**
//  * profile
//  */
// export const API_PROFILE_ACTION = 'API_PROFILE_ACTION';
// export const API_PROFILE_SUCCESS_ACTION = 'API_PROFILE_SUCCESS_ACTION';
// /**
//  * logout
//  */
// export const API_LOGOUT_ACTION = 'API_LOGOUT_ACTION';
// export const API_LOGOUT_SUCCESS_ACTION = 'API_LOGOUT_SUCCESS_ACTION';

// /**
//  * fortgot password
//  */
// export const API_FORGOT_PASSWORD_ACTION = 'API_FORGOT_PASSWORD_ACTION';

// /**
//  * reset password
//  */
// export const API_RESET_PASSWORD_ACTION = 'API_RESET_PASSWORD_ACTION';

// /**
//  * change password
//  */
// export const API_CHANGE_PASSWORD_ACTION = 'API_CHANGE_PASSWORD_ACTION';

// /**
//  * update user info
//  */
// export const API_UPDATE_USER_ACTION = 'API_UPDATE_USER_ACTION';

// /*
//  * login action
//  */
// export const loginAction = (email: string, password: string) => ({
//   type: API_LOGIN_ACTION,
//   payload: {
//     email,
//     password,
//   },
// });

// export const loginSuccessAction = (data: any) => ({
//   type: API_LOGIN_SUCCESS_ACTION,
//   ...data,
// });

// export const loginFailAction = (error: any) => ({
//   type: API_LOGIN_FAIL_ACTION,
//   ...error,
// });

// /*
//  * register action
//  */
// export const registerAction = (
//   email: string,
//   password: string,
//   confirmation_password: string,
// ) => ({
//   type: API_REGISTER_ACTION,
//   payload: {
//     email,
//     password,
//     confirmation_password,
//   },
// });

// /*
//  * profile action
//  */
// export const profileAction = () => ({
//   type: API_PROFILE_ACTION,
// });

// export const profileSuccessAction = (data: any) => ({
//   type: API_PROFILE_SUCCESS_ACTION,
//   ...data,
// });

// /*
//  * logout action
//  */
// export const logoutAction = () => ({
//   type: API_LOGOUT_ACTION,
// });

// export const logoutSuccessAction = () => ({
//   type: API_LOGOUT_SUCCESS_ACTION,
// });

// /*
//  * google login action
//  */
// export const googleLoginAction = () => ({
//   type: GOOGLE_LOGIN_ACTION,
// });

// /*
//  * apple login action
//  */
// export const appleLoginAction = () => ({
//   type: APPLE_LOGIN_ACTION,
// });

// /*
//  * facebook login action
//  */
// export const facebookLoginAction = () => ({
//   type: FACEBOOK_LOGIN_ACTION,
// });

// /*
//  * fotgot password action
//  */
// export const forgotPasswordAction = (email: string) => ({
//   type: API_FORGOT_PASSWORD_ACTION,
//   payload: {
//     email,
//   },
// });

// /*
//  * reset password action
//  */
// export const resetPasswordAction = (
//   token: string,
//   password: string,
//   password_confirmation: string,
// ) => ({
//   type: API_RESET_PASSWORD_ACTION,
//   payload: {
//     token,
//     password,
//     password_confirmation,
//   },
// });

// /*
//  * change password action
//  */
// export const changePasswordAction = (
//   user_id: number,
//   password: string,
//   confirmation_password: string,
//   email: string,
//   first_name: string,
//   last_name: string,
// ) => ({
//   type: API_CHANGE_PASSWORD_ACTION,
//   payload: {
//     user_id,
//     password,
//     confirmation_password,
//     email,
//     first_name,
//     last_name,
//   },
// });

// /*
//  * update user action
//  */
// export const updateUserAction = (
//   user_id: number,
//   email: string,
//   first_name: string,
//   last_name: string,
//   phone: string,
//   address: string,
//   gender: string,
//   avatar: {
//     fileName: string;
//     fileSize: number;
//     height: number;
//     type: string;
//     uri: string;
//     width: number;
//   },
// ) => ({
//   type: API_UPDATE_USER_ACTION,
//   payload: {
//     user_id,
//     email,
//     first_name,
//     last_name,
//     phone,
//     address,
//     gender,
//     avatar,
//   },
// });
