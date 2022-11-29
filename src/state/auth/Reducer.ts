import { GAction, Role } from "../interface";
import { Auth, AuthReducer, CLEAR_AUTH, SET_AUTH } from "./interface";
const initialState: Auth = {
  isAuthenticated: false,
  role: Role.GUEST,
  token: "",
  user: {
    name: "",
    mobile: "",
    city: "",
    id: "",
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
    default:
      break;
  }
  return state;
};

export default authReducer;
