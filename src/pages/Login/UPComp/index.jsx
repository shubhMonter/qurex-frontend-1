import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { get, headers, post } from '../../../api';
import { BaseSetting } from '../../../utils/common';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../state/auth/Actions';

const UPComp = () => {
  const dispatch = useDispatch();

  const [buttonText, setButtonText] = useState('Login');
  const [disabled, setDisabled] = useState(false);
  const [upInputs, setUpInputs] = useState({});
  const [errMsg, setErrMsg] = useState(null);
  const passRef = useRef(null);
  const mobileRef = useRef(null);
  const navigate = useNavigate();
  const handleUPChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpInputs((values) => ({ ...values, [name]: value }));

    if (name === 'mobile') {
      // console.log(value);
      let len = value?.length;
      let zero = value?.startsWith('0');
      let one = value?.startsWith('1');
      let two = value?.startsWith('2');
      let three = value?.startsWith('3');
      let four = value?.startsWith('4');
      let five = value?.startsWith('5');

      if (len !== 10 || zero || one || two || three || four || five) {
        // console.log(value);
        setErrMsg('Invalid Mobile Number');
        setDisabled(true);
      } else {
        setErrMsg(null);
        setDisabled(false);
      }
    }
  };
  const handleUPSubmit = (e) => {
    e.preventDefault();
    postUPData();
  };
  const postUPData = async () => {
    let sec = 10;
    setDisabled(true);
    let counter = setInterval(() => {
      if (sec > 0) {
        setButtonText(sec--);
      } else {
        setDisabled(false);
        setButtonText('Login');
        clearInterval(counter);
      }
    }, 1000);
    try {
      const response = await post(
        BaseSetting.userApiDomain + '/auth',
        upInputs
      );
      const result = response.data;
      let userHeaders = response.headers;
      let token = userHeaders['x-auth-token'];
      let header2 = {
        Accept: 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-auth-token': token,
      };
      if (result.status === 1) {
        const response2 = await get(BaseSetting.userApiDomain + '/me', header2);
        if (response2?.data?.status === 1) {
          // response2?.data?.data?._id
          const response3 = await get(
            BaseSetting.doctorApiDomain +
              '/getByUserId/' +
              response2?.data?.data?._id
          );
          const res = response2?.data?.data;
          const drData = response3?.data?.data;
          // console.log(response3?.data?.data);

          dispatch(setAuth({ ...res, drData: drData, token: token }));
          navigate('/');
        } else {
        }
      } else {
        // console.log(result.data);
        if (result.data === 'Invalid mobile number') {
          setErrMsg('User does not exist with this Mobile Number');
        }
        // if (result.data == 'Invalid email or password')
        //   alert('Invalid email or password');
        if (result?.data === 'Invalid email or password') {
          setErrMsg(result?.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => handleUPSubmit(e)}>
      <div className="t414 text-[#1C1C1C] mt-7">Mobile Number</div>
      <div className="mt-3">
        <input
          ref={mobileRef}
          name="mobile"
          value={upInputs.name}
          onChange={handleUPChange}
          className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Please enter your mofbile number"
        />
      </div>
      {errMsg ? (
        <div className="mt-2 text-[#da232aff] text-sm">{errMsg}</div>
      ) : (
        ''
      )}
      <div className="mt-4 flex justify-between">
        <div className="t414 text-[#1C1C1C] ">Password</div>
        <div className="text-[#1C5BD9] t512 mr-28 cursor-pointer">
          Forgot password?
        </div>
      </div>
      <div className="mt-3">
        <input
          ref={passRef}
          name="password"
          value={upInputs.name}
          onChange={handleUPChange}
          className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Enter your Password"
        />
      </div>
      <div className="mt-2 flex flex-row">
        <div>
          <input type="checkbox" />
        </div>
        <div className="ml-3 t514 text-[#1C1C1C] ">Remember me</div>
      </div>
      <div className="">
        <button
          type="submit"
          className={`bg-[#1C5BD9] ${
            disabled ? 'opacity-75' : ''
          } py-3 rounded-3xl w-9/12 mt-10 text-white t714`}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default UPComp;
