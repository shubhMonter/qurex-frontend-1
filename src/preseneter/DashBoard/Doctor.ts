import { get, headers, put } from "../../api";
import { BaseSetting } from "../../utils/common";
import DoctorsAction, { addData } from "../../state/doctor/Actions";
import { Doctor } from "../../state/doctor/interface";

export const getDoctorDetails = async (id: string, token: string) => {
  try {
    const response = await get(
      BaseSetting.doctorApiDomain + `/getByUserId/${id}`,
      { ...headers, ["x-auth-token"]: token }
    );
    const result = response.data;
    if (result.status == 1) {
      const {
        professionalDetail,
        education,
        awards,
        experience,
        businessHours,
        _id: id,
      } = result.data;

      addData({
        professionalDetail,
        education,
        awards,
        businessHours,
        experience,
        id,
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const UpdateDoctorsDetails = async (
  id: string,
  req: Doctor,
  token: string
) => {
  try {
    const key = Object.keys(req)[0];
    const response = await put(
      BaseSetting.doctorApiDomain + `/${id}`,
      {
        ...req,
      },
      { ...headers, ["x-auth-token"]: token }
    );
    const result = response.data;
    if (result.status == 1) {
      DoctorsAction[key as keyof Doctor](result.data[key]);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const getSpecializationList = async (token: string) => {
  return await get(
    BaseSetting.adminApiDomain + "/specialization/getAllSpecializations",
    {
      ...headers,
      "x-auth-token": token,
    }
  );
};

export const getTreatmentCategories = async (token: string) => {
  return await get(
    BaseSetting.adminApiDomain + "/treatmentcategory/getAllTreatmentCategories",
    {
      ...headers,
      ["x-auth-token"]: token,
    }
  );
};
