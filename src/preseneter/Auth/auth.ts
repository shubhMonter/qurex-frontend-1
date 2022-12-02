import { post } from "../../api";
import { setAuth } from "../../state/auth/Actions";
import { Auth } from "../../state/auth/interface";
import { clearError, setError } from "../../state/error/actions";
import { BaseSetting } from "../../utils/common";
export interface Register {
  mobile: number;
  name: string;
  role: string;
  email: string;
}

export interface RegisterWithPass extends Register {
  password: string;
}
export interface VerifyOTP {
  otp: number;
  mobile: number;
}
export interface Login {
  mobile: number;
  email: string;
  password: string;
}
export const SignUpOTP = async (req: Register) => {
  clearError("authError");
  return await post(BaseSetting.userApiDomain + "/generateSignUpOTP", req);
};

export const SignInOTP = async (req: VerifyOTP) => {
  try {
    clearError("authError");
    const response = await post(
      BaseSetting.userApiDomain + "/signUpViaOTP",
      req
    );
    if (response.data.status === 1) {
      const {
        role,
        city,
        mobile,
        name,
        _id: id,
        email,
        profilePic,
      } = response.data.data;
      const data: Auth = {
        isAuthenticated: true,
        role,
        user: {
          name,
          mobile,
          city,
          id,
          email,
          profilePic,
        },
        token: response.headers["x-auth-token"] as string,
      };
      setAuth(data);
    } else {
      setError(
        {
          error: response.data.data as string,
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

export const SubmitVerifyOTP = async (req: VerifyOTP) => {
  try {
    clearError("authError");
    const { mobile, otp } = req;
    const nReq = {
      mobileNo: mobile,
      otp,
    };
    const response = await post(
      BaseSetting.userApiDomain + "/loginViaOTP",
      nReq
    );
    if (response.data.status === 1) {
      const {
        role,
        city,
        mobile,
        name,
        _id: id,
        email,
        profilePic,
      } = response.data.data;
      const data: Auth = {
        isAuthenticated: true,
        role,
        user: {
          name,
          mobile,
          email,
          city,
          id,
          profilePic,
        },
        token: response.headers["x-auth-token"] as string,
      };
      setAuth(data);
    } else {
      setError(
        {
          error: response.data.data as string,
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

export const GenerateOTP = async (mobileNo: number) => {
  clearError("authError");
  return await post(BaseSetting.userApiDomain + "/generateOTP", { mobileNo });
};

export const SignInWithPass = async (req: Login) => {
  try {
    clearError("authError");
    const response = await post(BaseSetting.userApiDomain + "/auth", req);
    if (response.data.status === 1) {
      const {
        role,
        city,
        mobile,
        name,
        _id: id,
        email,
        profilePic,
      } = response.data.data;
      const data: Auth = {
        isAuthenticated: true,
        role,
        user: {
          name,
          mobile,
          city,
          id,
          email,
          profilePic,
        },
        token: response.headers["x-auth-token"] as string,
      };
      setAuth(data);
    } else {
      setError(
        {
          error: response.data.data as string,
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
