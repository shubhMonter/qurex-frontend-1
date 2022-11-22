export const ADD_ROW = 'ADD_ROW';
export const UPDATE_ROW = 'UPDATE_ROW';
export const DELETE_ROW = 'DELETE_ROW';

export const addRow = (payload) => {
  return {
    type: 'ADD_ROW',
    payload: payload,
  };
};
export const updateRow = (payload) => {
  return {
    type: 'UPDATE_ROW',
    payload: payload,
  };
};
export const deleteRow = (payload) => {
  return {
    type: 'DELETE_ROW',
    payload: payload,
  };
};
