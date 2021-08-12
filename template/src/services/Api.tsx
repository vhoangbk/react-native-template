// import {select, put} from 'redux-saga/effects';
// import {getAuth} from '@stores/selectors/AuthSelectors';
// import {getSetting} from '@stores/selectors/SettingSelectors';
// import Config from 'react-native-config';
// import {logoutSuccessAction} from '@stores/actions/AuthAction';

// export const ErrorCode = {
//   NONE: 0,
//   NETWORK_FAILED: 1,
//   INTERNAL_SERVER: 2,
//   API_ERROR: 3,
// };

// class Error {
//   errorCode = ErrorCode.NONE;
//   message = '';

//   constructor(errorCode = ErrorCode.NONE, message = '') {
//     this.errorCode = errorCode;
//     this.message = message;
//   }
// }

// class Response {
//   error = new Error();
//   data = {};
//   meta = {};
//   message = '';

//   constructor(error = new Error(), data = {}) {
//     this.error = error;
//     this.data = data;
//   }
// }

// export function* callApi(url: string, method: string, params: any) {
//   let response = new Response();
//   try {
//     let setting = yield select(getSetting);
//     let urlLang = addLangUrl(url, method, setting.language);
//     logApi('[REQUEST]', method, urlLang, params);
//     let auth = yield select(getAuth);
//     let headers = {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${auth.access_token}`,
//     };
//     let res;
//     if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
//       res = yield fetch(urlLang, {
//         method: method,
//         headers: headers,
//         body: params ? JSON.stringify(params) : null,
//       });
//     } else if (method === 'GET') {
//       res = yield fetch(urlLang, {
//         method: method,
//         headers: headers,
//       });
//     }
//     const data = yield res.json();
//     logApi('[RESPONSE]', method, urlLang, data);
//     if (data.status === true) {
//       response.data = data.data;
//       response.meta = data.meta;
//       response.message = data.message.join('\n');
//       yield response;
//     } else {
//       response.data = data;
//       let meg = data.message.join('\n');
//       response.error = new Error(ErrorCode.API_ERROR, meg);
//       if (res.status === 401) {
//         yield put(logoutSuccessAction());
//       }
//     }
//   } catch (ex) {
//     console.log('[ERROR]', method, url);
//     console.log(ex);
//     response.error = new Error(ErrorCode.NETWORK_FAILED, ex.message);
//   } finally {
//     return response;
//   }
// }

// const logApi = (name: string, method: string, url: string, data: string) => {
//   if (Config.DEBUG_MODE === 'true') {
//     console.log(name, url, method, data);
//   }
// };

// const addLangUrl = (url: string, method: string, lang: string) => {
//   let result = '';
//   let local = lang === 'vi' ? 'vi_VN' : 'en_US';
//   if (method !== 'GET') {
//     result = `${url}?lang=${local}`;
//   } else {
//     let arr = url.split('?');
//     if (arr.length > 1) {
//       result = `${url}&lang=${local}`;
//     } else {
//       result = `${url}?lang=${local}`;
//     }
//   }
//   return result;
// };

// export function* callApiUpdateUser(url: string, method: string, params: any) {
//   let response = new Response();
//   try {
//     let setting = yield select(getSetting);
//     let urlLang = addLangUrl(url, method, setting.language);
//     logApi('[REQUEST]', method, urlLang, params);
//     let auth = yield select(getAuth);
//     let formdata = new FormData();
//     let headers = {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data',
//       'X-Requested-With': 'XMLHttpRequest',
//       Authorization: `Bearer ${auth.access_token}`,
//     };
//     if (params) {
//       Object.keys(params).forEach((k: string) => {
//         let values = params[`${k}`];
//         formdata.append(k, values);
//       });
//     }

//     let res = yield fetch(urlLang, {
//       method: method,
//       headers: headers,
//       body: formdata,
//     });
//     const data = yield res.json();
//     logApi('[RESPONSE]', method, urlLang, data);
//     if (data.status === true) {
//       response.data = data.data;
//       response.meta = data.meta;
//       response.message = data.message.join('\n');
//       yield response;
//     } else {
//       response.data = data;
//       let meg = data.message.join('\n');
//       response.error = new Error(ErrorCode.API_ERROR, meg);
//       if (res.status === 401) {
//         yield put(logoutSuccessAction());
//       }
//     }
//   } catch (ex) {
//     console.log('[ERROR]', method, url);
//     console.log(ex);
//     response.error = new Error(ErrorCode.NETWORK_FAILED, ex.message);
//   } finally {
//     return response;
//   }
// }
