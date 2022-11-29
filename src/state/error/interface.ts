import { GAction } from "../interface";

export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
export interface Error {
  error: string;
  show: boolean;
}

export interface ErrorReducer {
  (state: Error, action: GAction<Error>): Error;
}
