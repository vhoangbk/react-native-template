/**
 * login
 */
export const API_LOGIN_ACTION = 'API_LOGIN_ACTION';
export const API_LOGIN_SUCCESS_ACTION = 'API_LOGIN_SUCCESS_ACTION';
export const API_LOGIN_FAIL_ACTION = 'API_LOGIN_FAIL_ACTION';

/*
 * login action
 */
export const loginAction = (email: string, password: string) => ({
  type: API_LOGIN_ACTION,
  payload: {
    email,
    password,
  },
});

export const loginSuccessAction = (data: any) => ({
  type: API_LOGIN_SUCCESS_ACTION,
  ...data,
});

export const loginFailAction = (error: any) => ({
  type: API_LOGIN_FAIL_ACTION,
  ...error,
});

