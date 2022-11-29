import store from "../store";
import { CLEAR_ERROR, Error, SET_ERROR } from "./interface";
const dispatch = store.dispatch;

export const setError = (payload: Error, reducerName: string) => {
  dispatch({
    type: SET_ERROR,
    payload,
    reducerName,
  });
};

export const clearError = (reducerName: string) => {
  dispatch({
    type: CLEAR_ERROR,
    reducerName,
  });
};
