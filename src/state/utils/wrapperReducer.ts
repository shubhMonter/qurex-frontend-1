import { Reducer } from "react";
import { AnyAction } from "redux";

const createWrapperReducer = <T, R extends AnyAction>(
  reducerFunction: Reducer<T, R>,
  name: string
) => {
  return (state: T, action: R): T => {
    const { reducerName } = action;
    const isInitializationCall = state === undefined;
    if (reducerName !== name && !isInitializationCall) return state;
    return reducerFunction(state, action);
  };
};

export default createWrapperReducer;
