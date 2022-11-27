import store from "./store";

export enum Role {
  PATIENT = "patient",
  DR = "doctor",
  ADMIN = "admin",
  GUEST = "guest",
}
export interface GAction<T> {
  type: string;
  payload: T;
  reducerName: string;
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
