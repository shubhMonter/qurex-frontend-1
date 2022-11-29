import { headers, put } from "../../api";
import { BaseSetting } from "../../utils/common";

export const ExperienceUpdate = async (id: string, req: any, token: string) => {
  return await put(
    BaseSetting.doctorApiDomain + `/${id}`,
    {
      ...req,
    },
    { ...headers, ["x-auth-token"]: token }
  );
};
