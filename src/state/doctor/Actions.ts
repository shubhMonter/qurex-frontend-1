import store from "../store";
import {
  ADD_BUSINESS_HOURS_DATA,
  ADD_DATA,
  ADD_EDUCATION_DATA,
  ADD_EXPERIENCE_DATA,
  ADD_PROFESSIONAL_DATA,
  ADD_BANK_DATA,
  Awards,
  BankDetails,
  BusinessHours,
  Doctor,
  Education,
  Experience,
  ProfessionDetails,
} from "./interface";
const dispatch = store.dispatch;
export const addData = (payload: Doctor) => {
  dispatch({
    type: ADD_DATA,
    payload,
  });
};
export default {
  professionalDetail: (payload: ProfessionDetails) => {
    dispatch({
      type: ADD_PROFESSIONAL_DATA,
      payload,
    });
  },
  bankDetail: (payload: BankDetails) => {
    dispatch({
      type: ADD_BANK_DATA,
      payload,
    });
  },
  experience: (payload: Experience) => {
    dispatch({
      type: ADD_EXPERIENCE_DATA,
      payload,
    });
  },
  education: (payload: Education) => {
    dispatch({
      type: ADD_EDUCATION_DATA,
      payload,
    });
  },
  businessHours: (payload: BusinessHours) => {
    dispatch({
      type: ADD_BUSINESS_HOURS_DATA,
      payload,
    });
  },
  awards: (payload: Awards) => {
    dispatch({
      type: ADD_DATA,
      payload,
    });
  },
  affiliation: () => {},
  id: () => {},
};
