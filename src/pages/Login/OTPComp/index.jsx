import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GenerateOTP, SubmitVerifyOTP } from "../../../preseneter/Auth/auth";
import CommonOTP from "../../../common/components/OTP/commonOtp";
const OTPComp = () => {
  const [buttonText, setButtonText] = useState("Get OTP");
  const [showLoader,setShowLoader] = useState(false);
  const [loginText, setLoginText] = useState("Login");
  const [disabled, setDisabled] = useState(false);
  const [errMsg, setErrMsg] = useState({
    error: "",
    show: false,
  });
  const [validateDisabled, setValidateDisabled] = useState(false);
  const [otpInputs, setOtpInputs] = useState({});
  const [otp, setOtp] = useState(false);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.authData);
  const error = useSelector((state) => state.auth.authError);

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/");
    }
  }, [auth.isAuthenticated]);
  // useEffect(() => {
  //   setErrMsg(error)
  // },[error])

  const handleSubmit = (e, otp) => {
    e.preventDefault();
    postData(otp);
  };
  const postData = async (otp) => {
    setValidateDisabled(true);
    setShowLoader(true);
    SubmitVerifyOTP({ mobile: otpInputs.mobileNo, otp });
  };
  const handleOTPChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtpInputs((values) => ({ ...values, [name]: value }));
    let len = value.length;
    let zero = value.startsWith("0");
    let one = value.startsWith("1");
    let two = value.startsWith("2");
    let three = value.startsWith("3");
    let four = value.startsWith("4");
    let five = value.startsWith("5");
    if (len !== 10 || zero || one || two || three || four || five) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    postOTPData();
  };
  const postOTPData = async () => {
    setErrMsg({
      error: "",
      show: false,
    });
    try {
      setDisabled(true);
      const response = await GenerateOTP(otpInputs.mobileNo);
      const result = response.data;
      if (result.status === 1) {
        setOtp(true);
      } else {
        setErrMsg({
          error: result.data,
          show: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return otp ? (
    <CommonOTP
      handleOtpSubmit={handleSubmit}
      err={errMsg}
      loginText={loginText}
      validateDisabled={validateDisabled}
    />
  ) : (
    <>
      <form onSubmit={(e) => handleOTPSubmit(e)}>
        <div className="t414 text-[#1C1C1C] mt-7">Mobile Number</div>
        <div className="mt-3">
          <input
            name="mobileNo"
            value={otpInputs.name}
            onChange={handleOTPChange}
            className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
            placeholder="Please enter your mobile number"
          />
        </div>
        {errMsg.show && (
          <div className="mt-2 text-[#da232aff] text-sm">{errMsg.error}</div>
        )}
        <div className="">
          <button
            type="submit"
            className={`bg-[#1C5BD9] ${
              disabled ? "opacity-75" : ""
            } shadow-xl hover:shadow-2xl ease-in-out duration-500 py-3 rounded-3xl w-9/12 mt-10 text-white t714`}
            disabled={disabled}
          >
            {showLoader ? <span>Sending OTP...</span> : buttonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default OTPComp;
