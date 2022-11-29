import { GAction, Role } from "../interface";

export const SET_AUTH = "SET_AUTH";
export const CLEAR_AUTH = "CLEAR_AUTH";

export const USER_UPDATE = "USER_UPDATE";

export interface Auth {
  isAuthenticated: boolean;
  role: Role;
  token: string;
  user: {
    name: string;
    mobile: string;
    city: string;
    email: string;
    id: string;
    profilePic: string;
  };
}

export interface AuthReducer {
  (state: Auth, action: GAction<Auth>): Auth;
}
