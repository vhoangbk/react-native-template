import {User} from "./User";

export type AppStateType = {
  loading?: boolean;
  error?: string;
};

export type ApplicationStore = {
  appState: AppStateType;
  auth: User;
};
