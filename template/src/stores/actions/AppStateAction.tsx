export const UPDATE_APP_STATE = 'UPDATE_APP_STATE';
export const APP_MOUNTED = 'APP_MOUNTED';
export const APP_BECOME_ACTIVE = 'APP_BECOME_ACTIVE';
export const APP_RESIGN_ACTIVE = 'APP_RESIGN_ACTIVE';
export const APP_ENTER_BACKGROUND = 'APP_ENTER_BACKGROUND';
export const RESET_DATA = 'RESET_DATA';

export const updateAppStateAction = (payload: any) => ({
  type: UPDATE_APP_STATE,
  payload,
});

export const appMountedAction = () => ({
  type: APP_MOUNTED,
});

export const appBecomeActiveAction = () => ({
  type: APP_BECOME_ACTIVE,
});

export const appResignActiveAction = () => ({
  type: APP_RESIGN_ACTIVE,
});

export const appEnterBackgroundAction = () => ({
  type: APP_ENTER_BACKGROUND,
});

export const resetDataAction = () => ({
  type: RESET_DATA,
});
