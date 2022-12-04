import { useRef, useState } from 'react';
import { headers, post } from '../../../api';
import { BaseSetting } from '../../../utils/common';
import DiscMsg from '../../../common/components/DisclaimerMsg';
import RegisterDetails from '../RegisterDetails';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../state/auth/Actions';
const OTP = ({ mobileNo }) => {
  const dispatch = useDispatch();

  const [validateComp, setValidateComp] = useState(false);
  const [inputs, setInputs] = useState({});
  const [otpcomp, setOtpComp] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loginText, setLoginText] = useState('Login');
  const [validateDisabled, setValidateDisabled] = useState(false);

  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
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

    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  const postData = async () => {
    let sec = 10;
    setValidateDisabled(true);
    let counter = setInterval(() => {
      if (sec > 0) {
        setLoginText(sec--);
      } else {
        setValidateDisabled(false);
        setLoginText('Login');
        clearInterval(counter);
      }
    }, 1000);
    try {
      const response = await post(
        BaseSetting.userApiDomain + '/loginViaOTP',
        {
          mobileNo: mobileNo,
          otp: inputs.otp1 + inputs.otp2 + inputs.otp3 + inputs.otp4,
        },
        headers
      );
      // setApiData(response.data.data);
      const result = response.data;
      console.log(result);
      if (result.status == 1) {
        dispatch(
          setAuth({ ...result.data, userHeaders: response.config.headers })
        );
      } else {
        setErrMsg(result.data);
      }
    } catch (error) {
      alert('Request timeout, Please refresh the page and try again');
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col bg-white">
      {validateComp ? (
        <RegisterDetails mobileNo={mobileNo} />
      ) : (
        <div className=" md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
          <div className="t730 text-[#1C1C1C] h-9 ">Submit OTP</div>
          <div className="t414 text-[#1C1C1C] opacity-50 h-4 mt-4">
            Please enter the OTP sent to your mobile number
          </div>
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
                  name="otp2"
                  ref={ref2}
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
                  name="otp3"
                  ref={ref3}
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

            <div className="">
              <button
                type="submit"
                className={`${
                  validateDisabled ? 'opacity-75' : ''
                }bg-[#1C5BD9] py-3 rounded-3xl w-8/12 mt-16 text-white t714`}
                disabled={validateDisabled}
              >
                {loginText}
              </button>
            </div>
            <div className="mt-5 ml-9 flex flex-row t514 text-[#666666] ">
              <div className="">Didn’t receive the OTP? </div>
              <div className="text-[#1C5BD9] ">Resend</div>
            </div>
            {errMsg ? (
              <div className="bg-red-600 shadow-lg w-60 rounded-2xl max-w-full text-xs mt-3">
                <div className="px-3 py-1 bg-red-600 rounded-2xl break-words text-white">
                  Please enter the correct OTP
                </div>
              </div>
            ) : (
              ''
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default OTP;
