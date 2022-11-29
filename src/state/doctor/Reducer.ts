import { GAction } from "../interface";
import {
  ADD_AWARDS_DATA,
  ADD_BUSINESS_HOURS_DATA,
  ADD_DATA,
  ADD_EDUCATION_DATA,
  ADD_EXPERIENCE_DATA,
  ADD_PROFESSIONAL_DATA,
  Awards,
  BusinessHours,
  Doctor,
  DoctorReducer,
  Education,
  Experience,
  ProfessionDetails,
} from "./interface";

const initialState: Doctor = {
  professionalDetail: {
    treatments: [],
    specializations: [],
  },
  businessHours: [],
  education: [],
  experience: [],
  awards: [],
  affiliation: [],
  id: "",
};

const doctorReducer: DoctorReducer = (
  state = initialState,
  action: GAction<Doctor>
): Doctor => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_PROFESSIONAL_DATA:
      return {
        ...state,
        professionalDetail: action.payload as ProfessionDetails,
      };
    case ADD_BUSINESS_HOURS_DATA:
      return {
        ...state,
        businessHours: action.payload as BusinessHours[],
      };
    case ADD_EDUCATION_DATA:
      return {
        ...state,
        education: action.payload as Education[],
      };
    case ADD_EXPERIENCE_DATA:
      return {
        ...state,
        experience: action.payload as Experience[],
      };
    case ADD_AWARDS_DATA:
      return {
        ...state,
        awards: action.payload as Awards[],
      };

    default:
      break;
  }
  return state;
};

export default doctorReducer;
