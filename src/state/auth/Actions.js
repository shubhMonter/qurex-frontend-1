import store from "../store";
import { CLEAR_AUTH, SET_AUTH } from "./interface";
const dispatch = store.dispatch;
export const setAuth = (payload) => {
  dispatch({
    type: SET_AUTH,
    payload,
  });
};

export const emptyAuth = () => {
  dispatch({
    type: CLEAR_AUTH,
  });
};
