const initialState = null;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        data: action.payload,
      };
    case "EMPTY_AUTH":
      return {
        ...state,
        user: null,
        data: null,
      };
    default:
      break;
  }
  return state;
};

export default authReducer;
