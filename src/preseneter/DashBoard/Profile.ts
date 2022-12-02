import { Axios } from "axios";
import { headers, put } from "../../api";
import { profileUpdate } from "../../state/auth/Actions";
import { setError } from "../../state/error/actions";
import { BaseSetting } from "../../utils/common";

export interface Profile {
  name: string;
  email: string;
  city: string;
}
export const ProfileUpdate = async (
  id: string,
  req: Profile,
  token: string
) => {
  try {
    const response = await put(BaseSetting.userApiDomain + `/${id}`, req, {
      ...headers,
      "x-auth-token": token,
    });
    if (response.data.status === 1) {
      const { city, name, email, profilePic } = response.data.data;
      profileUpdate({ city, name, email, profilePic });
      return response.data.data;
    } else {
      setError(
        {
          error: response.data.data,
          show: true,
        },
        "authError"
      );
    }
  } catch (error) {
    setError(
      {
        error: error as string,
        show: true,
      },
      "authError"
    );
  }
};
