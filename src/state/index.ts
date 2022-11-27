import { combineReducers } from "redux";
import specReducer from "./specialization/Reducer";
import authReducer from "./auth/authReducer";
import doctorReducer from "./doctor/Reducer";
export default combineReducers({
  specData: specReducer,
  auth: authReducer,
  drDetail: doctorReducer,
});
