import {EndPoint} from './EndPoint';
import {callApi} from './Api';

/**
 * call api login
 */
export function* login(payload: any) {
  let params = {
    email: payload.email,
    password: payload.password,
  };
  const data = yield callApi(EndPoint.LOGIN, 'POST', params);
  return data;
}

