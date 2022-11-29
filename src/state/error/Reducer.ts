import { GAction } from "../interface";
import { CLEAR_ERROR, Error, ErrorReducer, SET_ERROR } from "./interface";
const initialState: Error = {
  error: "",
  show: false,
};
const errorReducer: ErrorReducer = (
  state = initialState,
  action: GAction<Error>
): Error => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...initialState,
      };
    default:
      break;
  }
  return state;
};

export default errorReducer;
