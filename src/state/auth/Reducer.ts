import { GAction, Role } from "../interface";
import {
  Auth,
  AuthReducer,
  CLEAR_AUTH,
  SET_AUTH,
  USER_UPDATE,
} from "./interface";
const initialState: Auth = {
  isAuthenticated: false,
  role: Role.GUEST,
  token: "",
  user: {
    name: "",
    mobile: "",
    city: "",
    id: "",
    email: "",
    profilePic: "",
  },
};
const authReducer: AuthReducer = (
  state = initialState,
  action: GAction<Auth>
): Auth => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_AUTH:
      return {
        ...initialState,
      };
    case USER_UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      break;
  }
  return state;
};

export default authReducer;
