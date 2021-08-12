import {select, put} from 'redux-saga/effects';
import Config from 'react-native-config';

export const ErrorCode = {
  NONE: 0,
  NETWORK_FAILED: 1,
  INTERNAL_SERVER: 2,
  API_ERROR: 3,
};

class Error {
  errorCode = ErrorCode.NONE;
  message = '';

  constructor(errorCode = ErrorCode.NONE, message = '') {
    this.errorCode = errorCode;
    this.message = message;
  }
}

class Response {
  error = new Error();
  data = {};
  meta = {};
  message = '';

  constructor(error = new Error(), data = {}) {
    this.error = error;
    this.data = data;
  }
}

export function* callApi(url: string, method: string, params: any) {
  let response = new Response();
  try {
    logApi('[REQUEST]', method, url, params);
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    let res;
    if (method === 'POST') {
      res = yield fetch(url, {
        method: method,
        headers: headers,
        body: params ? JSON.stringify(params) : null,
      });
    } else if (method === 'GET') {
      res = yield fetch(url, {
        method: method,
        headers: headers,
      });
    }
    const data = yield res.json();
    logApi('[RESPONSE]', method, url, data);
    if (data.status === true) {
      response.data = data.data;
      response.meta = data.meta;
      response.message = data.message.join('\n');
      yield response;
    } else {
      response.data = data;
      let meg = data.message.join('\n');
      response.error = new Error(ErrorCode.API_ERROR, meg);
    }
  } catch (ex) {
    console.log('[ERROR]', method, url);
    console.log(ex);
    response.error = new Error(ErrorCode.NETWORK_FAILED, ex.message);
  } finally {
    return response;
  }
}

const logApi = (name: string, method: string, url: string, data: string) => {
  if (Config.DEBUG_MODE === 'true') {
    console.log(name, url, method, data);
  }
};
