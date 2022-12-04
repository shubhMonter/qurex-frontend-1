import store from "../store";
import { CLEAR_AUTH, SET_AUTH, USER_UPDATE } from "./interface";
import { CLEAR_DOCTOR } from "../doctor/interface";
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
  dispatch({
    type: CLEAR_DOCTOR,
  });
};

export const profileUpdate = (payload) => {
  dispatch({
    type: USER_UPDATE,
    payload,
  });
};
