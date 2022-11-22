import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { headers, post } from '../../../api';
import UserApi from '../../../api/UserAPI';
import { BaseSetting } from '../../../utils/common';
import Countdown from 'react-countdown';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../state/auth/Actions';
import * as Yup from 'yup';
import { useFormik } from 'formik';
const OTPComp = () => {
  const [buttonText, setButtonText] = useState('Get OTP');
  const [validateText, setValidateText] = useState('Get OTP');
  const [loginText, setLoginText] = useState('Login');
  const [disabled, setDisabled] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [inv, setInv] = useState(false);
  const [dne, setDNE] = useState(false);
  const [validateDisabled, setValidateDisabled] = useState(false);
  const [otpInputs, setOtpInputs] = useState({});
  const [otp, setOtp] = useState(false);
  const [mobNo, setMobNo] = useState('');
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [otpcomp, setOtpComp] = useState(false);
  const mobileRef = useRef(null);

  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == 'otp1') {
      ref2.current.focus();
    }
    if (name == 'otp2') {
      ref3.current.focus();
    }
    if (name == 'otp3') {
      ref4.current.focus();
    }
    setErrMsg('');
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  const postData = async () => {
    // console.log(mobNo);
    let sec = 10;
    setValidateDisabled(true);
    let counter = setInterval(() => {
      if (sec > 0) {
        setValidateText(sec--);
        setLoginText(sec--);
      } else {
        setValidateDisabled(false);
        setValidateText('Get OTP');
        setLoginText('Login');
        clearInterval(counter);
      }
    }, 1000);
    try {
      const response = await post(
        BaseSetting.userApiDomain + '/loginViaOTP',
        {
          mobileNo: mobNo,
          otp: inputs.otp1 + inputs.otp2 + inputs.otp3 + inputs.otp4,
        },
        headers
      );
      const result = response?.data;
      const token = response?.headers['x-auth-token'];
      const drData = await UserApi.getByUserId(result.data?._id);

      if (result.status === 1) {
        dispatch(
          setAuth({
            ...result.data,
            drData: drData,
            token: token,
          })
        );

        navigate('/');
      } else {
        setErrMsg(result.data);
      }
    } catch (error) {
      alert('Request timeout, Please refresh the page and try again');
      console.log(error);
    }
  };
  const handleOTPChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtpInputs((values) => ({ ...values, [name]: value }));
    let len = value.length;
    let zero = value.startsWith('0');
    let one = value.startsWith('1');
    let two = value.startsWith('2');
    let three = value.startsWith('3');
    let four = value.startsWith('4');
    let five = value.startsWith('5');
    if (len !== 10 || zero || one || two || three || four || five) {
      setInv(true);
      setDNE(false);
      setDisabled(true);
    } else {
      setInv(false);
      setDisabled(false);
    }
    // console.log(len);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    postOTPData();
  };
  const postOTPData = async () => {
    setMobNo(otpInputs.mobileNo);
    // console.log(otpInputs.mobileNo.length);
    try {
      setInv(false);
      let sec = 10;
      setDisabled(true);
      let counter = setInterval(() => {
        if (sec > 0) {
          setButtonText(sec--);
        } else {
          setDisabled(false);
          setButtonText('Get OTP');
          clearInterval(counter);
        }
      }, 1000);
      const response = await post(
        BaseSetting.userApiDomain + '/generateOTP',
        otpInputs,
        headers
      );
      // setApiData(response.data.data);
      const result = response.data;
      // console.log(response?.data);
      if (result.status === 1) {
        setOtp(true);
      } else {
        // console.log(result.data);
        if (result.data === 'Invalid mobile number') {
          setDNE(true);
        }
        // if (result.data == 'Invalid email or password')
        //   alert('Invalid email or password');
        else {
          alert('Error processing your request,Please try again !');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return otp ? (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="w-9/12 t414 text-[#1C1C1C] mt-16 grid grid-cols-4">
        <div className="col-span-1 ">
          <input
            name="otp1"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
        <div className="col-span-1 ">
          <input
            ref={ref2}
            name="otp2"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
        <div className="col-span-1 ">
          <input
            ref={ref3}
            name="otp3"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
        <div className="col-span-1 ">
          <input
            ref={ref4}
            name="otp4"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
      </div>
      <div>
        {errMsg ? (
          <div className="bg-red-600 shadow-lg w-60 rounded-2xl max-w-full text-xs mt-3">
            <div className="px-3 py-1 bg-red-600 rounded-2xl break-words text-white">
              Please enter the correct OTP
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="">
        <button
          type="submit"
          className={`${
            validateDisabled ? 'opacity-75' : ''
          } bg-[#1C5BD9] py-3 rounded-3xl w-8/12 mt-16 text-white t714`}
          disabled={validateDisabled}
        >
          {loginText}
        </button>
      </div>
    </form>
  ) : (
    <>
      <form onSubmit={(e) => handleOTPSubmit(e)}>
        <div className="t414 text-[#1C1C1C] mt-7">Mobile Number</div>
        <div className="mt-3">
          <input
            ref={mobileRef}
            name="mobileNo"
            value={otpInputs.name}
            onChange={handleOTPChange}
            className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
            placeholder="Please enter your mobile number"
          />
        </div>
        {inv ? (
          <div className="mt-2 text-[#da232aff] text-sm">
            Invalid Mobile Number
          </div>
        ) : (
          ''
        )}
        {dne ? (
          <div className="mt-2 text-[#da232aff] text-sm">
            User not exist with this Mobile Number
          </div>
        ) : (
          ''
        )}
        <div className="">
          <button
            type="submit"
            className={`bg-[#1C5BD9] ${
              disabled ? 'opacity-75' : ''
            } shadow-xl hover:shadow-2xl ease-in-out duration-500 py-3 rounded-3xl w-9/12 mt-10 text-white t714`}
            disabled={disabled}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default OTPComp;
