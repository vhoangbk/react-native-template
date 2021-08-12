// import {put, select} from 'redux-saga/effects';
// import {
//   login,
//   register,
//   profile,
//   logout,
//   sociallogin,
//   forgotPassword,
//   resetPassword,
//   changePassword,
//   updateUser,
// } from '@services/Auth';
// import {ErrorCode} from '@services/Api';
// import {updateAppStateAction} from '@stores/actions/AppStateAction';
// import {
//   loginFailAction,
//   loginSuccessAction,
//   logoutSuccessAction,
//   profileSuccessAction,
// } from '@stores/actions/AuthAction';
// import {errorMessage, successMessage} from '@utils/index';
// import {goBack, navigate} from '@navigation/Router';
// import {getUniqueId} from 'react-native-device-info';
// import {mappingUserAction} from '@stores/actions/DeviceAction';
// import {authParser, homePageParser, userParser} from '@utils/Parser';
// import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
// import {LoginManager, AccessToken} from 'react-native-fbsdk';
// import Toast from 'react-native-toast-message';
// import ImageResizer from 'react-native-image-resizer';
// import {Keyboard, Platform} from 'react-native';
// import {validateEmail, validatePassword} from '@utils/Validation';
// import I18n from '@locales/index';
// import {getSetting} from '@stores/selectors/SettingSelectors';
// import {roomHomePage} from '@services/Room';
// import {
//   getRoomsAction,
//   roomsHomePageSuccessAction,
// } from '@stores/actions/RoomAction';
// import {getRoomDetail} from '@stores/selectors/RoomSelectors';
// import {appleAuth} from '@invertase/react-native-apple-authentication';
// import {appleAuthAndroid} from '@invertase/react-native-apple-authentication';

// /**
//  * user login
//  */
// export function* fetchLogin({payload}: any) {
//   try {
//     yield put(updateAppStateAction({loading: true}));
//     const response = yield login(payload);
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       let dataParser = authParser(response.data);
//       yield put(loginSuccessAction(dataParser));
//       let uuid = yield getUniqueId();
//       yield put(mappingUserAction(uuid));
//     } else {
//       yield put(loginFailAction({}));
//       yield put(updateAppStateAction({loading: false}));
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     yield put(updateAppStateAction({loading: false}));
//     yield put(loginFailAction(err));
//     errorMessage(err.message);
//   }
// }

// function* checkEmail(email: string) {
//   let setting = yield select(getSetting);
//   if (email === '') {
//     yield put(
//       updateAppStateAction({
//         infoMessage: {
//           title: '',
//           message: I18n.t('messages.email_empty', {locale: setting.language}),
//           onPressOk: () => {},
//           isVisible: true,
//         },
//       }),
//     );
//     return false;
//   }
//   let isEmail = validateEmail(email);
//   if (!isEmail) {
//     yield put(
//       updateAppStateAction({
//         infoMessage: {
//           title: '',
//           message: I18n.t('messages.email_invalid', {locale: setting.language}),
//           onPressOk: () => {},
//           isVisible: true,
//         },
//       }),
//     );
//     return false;
//   }
//   return true;
// }

// function* checkPassword(password: string, rePassword: string) {
//   let setting = yield select(getSetting);
//   if (password === '') {
//     yield put(
//       updateAppStateAction({
//         infoMessage: {
//           title: '',
//           message: I18n.t('messages.pass_empty', {locale: setting.language}),
//           onPressOk: () => {},
//           isVisible: true,
//         },
//       }),
//     );
//     return false;
//   }
//   let isPassword = validatePassword(password);
//   if (!isPassword) {
//     yield put(
//       updateAppStateAction({
//         infoMessage: {
//           title: '',
//           message: I18n.t('messages.pass_invalid', {locale: setting.language}),
//           onPressOk: () => {},
//           isVisible: true,
//         },
//       }),
//     );
//     return false;
//   }
//   if (password !== rePassword) {
//     yield put(
//       updateAppStateAction({
//         infoMessage: {
//           title: '',
//           message: I18n.t('messages.password_not_match', {
//             locale: setting.language,
//           }),
//           onPressOk: () => {},
//           isVisible: true,
//         },
//       }),
//     );
//     return false;
//   }
//   return true;
// }

// /**
//  * user register
//  */
// export function* fetchRegister({payload}: any) {
//   try {
//     let isEmail = yield checkEmail(payload.email);
//     if (isEmail === false) {
//       return;
//     }
//     let isPassword = yield checkPassword(
//       payload.password,
//       payload.confirmation_password,
//     );
//     if (isPassword === false) {
//       return;
//     }
//     yield put(updateAppStateAction({loading: true}));
//     const response = yield register(payload);
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       successMessage(response.message);
//       goBack();
//     } else {
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     errorMessage(err.message);
//   }
// }

// /**
//  * user get profile
//  */
// export function* fetchProfile() {
//   try {
//     const response = yield profile();
//     if (response.error.errorCode === ErrorCode.NONE) {
//       let dataParser = userParser(response.data.entity);
//       yield put(profileSuccessAction({user: dataParser}));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// /**
//  * user logout
//  */
// export function* fetchLogout() {
//   try {
//     yield put(updateAppStateAction({loading: true}));
//     yield LoginManager.logOut();
//     const response = yield logout();
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       yield put(logoutSuccessAction());
//     } else {
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     errorMessage(err.message);
//   } finally {
//     yield put(updateAppStateAction({loading: false}));
//   }
// }

// /**
//  * google login
//  */
// export function* googleLogin() {
//   try {
//     yield GoogleSignin.signIn();
//     let result = yield GoogleSignin.getTokens();
//     yield put(updateAppStateAction({loading: true}));
//     const response = yield sociallogin('google', result.accessToken);
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       let dataParser = authParser(response.data);
//       yield put(loginSuccessAction(dataParser));
//       let uuid = yield getUniqueId();
//       yield put(mappingUserAction(uuid));
//     } else {
//       yield put(loginFailAction({}));
//       yield put(updateAppStateAction({loading: false}));
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err.code);
//     console.log(err);
//     if (err.code !== statusCodes.SIGN_IN_CANCELLED) {
//       errorMessage(err.message);
//     }
//     yield put(updateAppStateAction({loading: false}));
//     yield put(loginFailAction(err));
//   }
// }

// /**
//  * apple login
//  */
// export function* appleLogin() {
//   try {
//     let setting = yield select(getSetting);
//     let token = null;
//     if (appleAuth.isSupported) {
//       // performs login request
//       const appleAuthRequestResponse = yield appleAuth.performRequest({
//         requestedOperation: appleAuth.Operation.LOGIN,
//         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//       });

//       // get current authentication state for user
//       // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
//       const credentialState = yield appleAuth.getCredentialStateForUser(
//         appleAuthRequestResponse.user,
//       );

//       // use credentialState response to ensure the user is authenticated
//       if (credentialState === appleAuth.State.AUTHORIZED) {
//         // user is authenticated
//         let {identityToken} = appleAuthRequestResponse;
//         token = identityToken;
//       }
//     } else {
//       // android handle
//       if (appleAuthAndroid.isSupported) {
//         const rawNonce = Math.random().toString();
//         const state = Math.random().toString();

//         // Configure the request
//         appleAuthAndroid.configure({
//           // The Service ID you registered with Apple
//           clientId: 'com.quanlychitieu-auth',

//           // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
//           // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
//           redirectUri: 'https://quanlychitieu.com/social-auth/callback/apple',

//           // The type of response requested - code, id_token, or both.
//           responseType: appleAuthAndroid.ResponseType.ALL,

//           // The amount of user information requested from Apple.
//           scope: appleAuthAndroid.Scope.ALL,

//           // Random nonce value that will be SHA256 hashed before sending to Apple.
//           nonce: rawNonce,

//           // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
//           state,
//         });

//         // Open the browser window for user sign in
//         const response = yield appleAuthAndroid.signIn();
//         token = response.id_token;
//       }
//     }

//     if (!token) {
//       return errorMessage(
//         I18n.t('login.login_with_apple_error', {locale: setting.language}),
//       );
//     }
//     yield put(updateAppStateAction({loading: true}));
//     const response = yield sociallogin('apple', token);
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       let dataParser = authParser(response.data);
//       yield put(loginSuccessAction(dataParser));
//       let uuid = yield getUniqueId();
//       yield put(mappingUserAction(uuid));
//     } else {
//       yield put(loginFailAction({}));
//       yield put(updateAppStateAction({loading: false}));
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     yield put(updateAppStateAction({loading: false}));
//     yield put(loginFailAction(err));
//     errorMessage(err.message);
//   }
// }

// /**
//  * facebook login
//  */
// export function* facebookLogin() {
//   try {
//     yield LoginManager.logInWithPermissions(['public_profile', 'email']);
//     let accessToken = yield AccessToken.getCurrentAccessToken();
//     if (accessToken) {
//       yield put(updateAppStateAction({loading: true}));
//       const response = yield sociallogin('facebook', accessToken.accessToken);
//       yield put(updateAppStateAction({loading: false}));
//       if (response.error.errorCode === ErrorCode.NONE) {
//         let dataParser = authParser(response.data);
//         yield put(loginSuccessAction(dataParser));
//         let uuid = yield getUniqueId();
//         yield put(mappingUserAction(uuid));
//       } else {
//         yield put(loginFailAction({}));
//         yield put(updateAppStateAction({loading: false}));
//         errorMessage(response.error.message);
//       }
//     }
//   } catch (err) {
//     console.log(err);
//     yield put(updateAppStateAction({loading: false}));
//     yield put(loginFailAction(err));
//     errorMessage(err.message);
//   }
// }

// /**
//  * forgot password
//  */
// export function* fetchForgotPassword({payload}: any) {
//   try {
//     let isEmail = yield checkEmail(payload.email);
//     if (isEmail === false) {
//       return;
//     }
//     Keyboard.dismiss();
//     yield put(updateAppStateAction({loading: true}));
//     const response = yield forgotPassword(payload.email);
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       let meg = response.message;
//       Toast.show({
//         text1: '',
//         type: 'success',
//         text2: meg,
//         autoHide: true,
//       });
//     } else {
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     errorMessage(err.message);
//   } finally {
//     yield put(updateAppStateAction({loading: false}));
//   }
// }

// /**
//  * reset password
//  */
// export function* fetchResetPassword({payload}: any) {
//   try {
//     yield put(updateAppStateAction({loading: true}));
//     const response = yield resetPassword(payload);
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       Toast.show({
//         text1: '',
//         type: 'success',
//         text2: response.message,
//         autoHide: true,
//       });
//       navigate('Login');
//     } else {
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     errorMessage(err.message);
//   } finally {
//     yield put(updateAppStateAction({loading: false}));
//   }
// }

// /**
//  * change password
//  */
// export function* fetchChangePassword({payload}: any) {
//   let isPassword = yield checkPassword(
//     payload.password,
//     payload.confirmation_password,
//   );
//   if (isPassword === false) {
//     return;
//   }
//   try {
//     yield put(updateAppStateAction({loading: true}));
//     const response = yield changePassword(
//       payload.user_id,
//       payload.password,
//       payload.confirmation_password,
//       payload.email,
//       payload.first_name,
//       payload.last_name,
//     );
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       Toast.show({
//         text1: '',
//         type: 'success',
//         text2: response.message,
//         autoHide: true,
//       });
//     } else {
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     errorMessage(err.message);
//   } finally {
//     yield put(updateAppStateAction({loading: false}));
//   }
// }

// /**
//  * update user
//  */
// export function* fetchUpdateUser({payload}: any) {
//   try {
//     yield put(updateAppStateAction({loading: true}));
//     let imageResize = null;
//     if (payload.avatar.uri !== '') {
//       imageResize = yield ImageResizer.createResizedImage(
//         payload.avatar.uri,
//         1024,
//         1024,
//         'JPEG',
//         70,
//         0,
//         undefined,
//       );
//     }
//     let response = null;
//     if (imageResize !== null) {
//       response = yield updateUser(
//         payload.user_id,
//         payload.email,
//         payload.first_name,
//         payload.last_name,
//         payload.phone,
//         payload.address,
//         payload.gender,
//         {
//           name: imageResize.name,
//           uri:
//             Platform.OS === 'android'
//               ? `file://${imageResize.path}`
//               : imageResize.path,
//           type: payload.avatar.type,
//         },
//       );
//     } else {
//       response = yield updateUser(
//         payload.user_id,
//         payload.email,
//         payload.first_name,
//         payload.last_name,
//         payload.phone,
//         payload.address,
//         payload.gender,
//         undefined,
//       );
//     }
//     yield put(updateAppStateAction({loading: false}));
//     if (response.error.errorCode === ErrorCode.NONE) {
//       let dataParser = userParser(response.data.entity);
//       yield put(profileSuccessAction({user: dataParser}));
//       Toast.show({
//         text1: '',
//         type: 'success',
//         text2: response.message,
//         autoHide: true,
//       });
//       /**
//        * call api home-page to update
//        */
//       let roomDetail = yield select(getRoomDetail);
//       const responseHp = yield roomHomePage(roomDetail.id);
//       if (responseHp.error.errorCode === ErrorCode.NONE) {
//         let hpParser = homePageParser(responseHp.data);
//         yield put(roomsHomePageSuccessAction(hpParser));
//       } else {
//         errorMessage(responseHp.error.message);
//       }
//       /**
//        * get get room to update amount for left menu
//        */
//       yield put(getRoomsAction(roomDetail.id));
//     } else {
//       errorMessage(response.error.message);
//     }
//   } catch (err) {
//     console.log(err);
//     errorMessage(err.message);
//   } finally {
//     yield put(updateAppStateAction({loading: false}));
//   }
// }
