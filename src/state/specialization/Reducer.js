import { ADD_ROW, UPDATE_ROW, DELETE_ROW } from './Actions';

const initialState = {
  data: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,

        data: [
          ...state.data,
          {
            ...action.payload,
            id: state.data.length + 1,
          },
        ],
      };
    case UPDATE_ROW:
      var updatedArray = state.data.map((inputItem) => {
        if (action.payload.id === inputItem.id) {
          return {
            ...inputItem,
            title: action.payload.title,
            description: action.payload.description,
          };
        } else {
          return inputItem;
        }
      });
      return {
        ...state,
        data: [...updatedArray],
      };
    case DELETE_ROW:
      var deletedArray = state.data.filter(function (deleteItem, index) {
        return deleteItem.id !== action.payload;
      });
      return {
        ...state,
        data: [...deletedArray],
      };

    default:
      break;
  }
  return state;
};

export default Reducer;
