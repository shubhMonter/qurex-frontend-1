import { GAction } from "../interface";
export const ADD_DATA = "ADD_DATA";
export const ADD_PROFESSIONAL_DATA = "ADD_PROFESSIONAL_DATA";
export const ADD_BUSINESS_HOURS_DATA = "ADD_BUSINESS_HOURS_DATA";
export const ADD_EDUCATION_DATA = "ADD_EDUCATION_DATA";
export const ADD_EXPERIENCE_DATA = "ADD_EXPERIENCE_DATA";
export const ADD_AWARDS_DATA = "ADD_AWARDS_DATA";
export const CLEAR_DOCTOR = "CLEAR_DOCTOR";
export interface Doctor {
  professionalDetail?: ProfessionDetails;
  businessHours?: BusinessHours[];
  education?: Education[];
  experience?: Experience[];
  awards?: Awards[];
  affiliation?: Affiliation[];
  id?: string;
}

export interface ProfessionDetails {
  treatments: string[];
  specializations: string[];
}
export interface BusinessHours {
  day: string;
  slots: Slots[];
}
export interface Slots {
  from: string;
  to: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
}
export interface Experience {
  hospitalName: string;
  from: string;
  to: string;
  designation: string;
}

export interface Awards {
  name: string;
  year: string;
}

export interface Affiliation {
  name: string;
  year: string;
}

export interface DoctorReducer {
  (state: Doctor, action: GAction<Doctor>): Doctor;
}
