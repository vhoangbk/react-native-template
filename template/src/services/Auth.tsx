// import {EndPoint} from './EndPoint';
// import {callApi, callApiUpdateUser} from './Api';

// /**
//  * call api login
//  */
// export function* login(payload: any) {
//   let params = {
//     email: payload.email,
//     password: payload.password,
//   };
//   const data = yield callApi(EndPoint.LOGIN, 'POST', params);
//   return data;
// }

// /**
//  * call api social login
//  * provider: facebook or google
//  */
// export function* sociallogin(provider: string, auth_token: string) {
//   let params = {
//     auth_token,
//   };
//   const data = yield callApi(
//     `${EndPoint.SOCIAL_AUTH}/${provider}`,
//     'POST',
//     params,
//   );
//   return data;
// }

// /**
//  * call api register
//  */
// export function* register(payload: any) {
//   let params = {
//     email: payload.email,
//     password: payload.password,
//     confirmation_password: payload.confirmation_password,
//   };
//   const data = yield callApi(EndPoint.REGISTER, 'POST', params);
//   return data;
// }

// /**
//  * call api get profile
//  */
// export function* profile() {
//   const data = yield callApi(EndPoint.USERS, 'GET', undefined);
//   return data;
// }

// /**
//  * call api logout
//  */
// export function* logout() {
//   const data = yield callApi(EndPoint.LOGOUT, 'POST', undefined);
//   return data;
// }

// /**
//  * call api forgot password
//  */
// export function* forgotPassword(email: string) {
//   let params = {
//     email,
//   };
//   const data = yield callApi(EndPoint.FORGOT_PASSWORD, 'POST', params);
//   return data;
// }

// /**
//  * call api reset password
//  */
// export function* resetPassword(payload: any) {
//   const data = yield callApi(EndPoint.RESET_PASSWORD, 'POST', payload);
//   return data;
// }

// /**
//  * call api change password
//  */
// export function* changePassword(
//   user_id: number,
//   password: string,
//   confirmation_password: string,
//   email: string,
//   first_name: string,
//   last_name: string,
// ) {
//   let params = {
//     password,
//     confirmation_password,
//     email,
//     first_name,
//     last_name,
//   };
//   const data = yield callApi(
//     `${EndPoint.UPDATE_USER}/${user_id}`,
//     'PUT',
//     params,
//   );
//   return data;
// }

// /**
//  * call api update user
//  */
// export function* updateUser(
//   user_id: number,
//   email: string,
//   first_name: string,
//   last_name: string,
//   phone: string,
//   address: string,
//   gender: string,
//   avatar: {} | undefined,
// ) {
//   let params;
//   if (avatar) {
//     params = {
//       email,
//       first_name,
//       last_name,
//       phone,
//       address,
//       gender,
//       avatar,
//     };
//   } else {
//     params = {
//       email,
//       first_name,
//       last_name,
//       phone,
//       address,
//       gender,
//     };
//   }
//   const data = yield callApiUpdateUser(
//     `${EndPoint.UPDATE_USER}/${user_id}`,
//     'PUT',
//     params,
//   );
//   return data;
// }
