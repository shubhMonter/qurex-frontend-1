import { combineReducers } from "redux";
import { Error } from "../error/interface";
import { GAction } from "../interface";
import createWrapperReducer from "../utils/wrapperReducer";
import authReducer from "./Reducer";
import errorReducer from "../error/Reducer";

export default combineReducers({
  authData: authReducer,
  authError: createWrapperReducer<Error, GAction<Error>>(
    errorReducer,
    "authError"
  ),
});
