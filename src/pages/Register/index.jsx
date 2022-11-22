
import qurexhome from '../../assets/pngs/qurexhome.png';
import { useState } from 'react';
import DiscMsg from '../../common/components/DisclaimerMsg';
import { headers, post } from '../../api';
import { BaseSetting } from '../../utils/common';
import UserApi from '../../api/UserAPI';
import { setAuth } from '../../state/auth/Actions';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [formData, setFormData] = useState({});
  const [buttonText, setButtonText] = useState('Get OTP');
  const [loginText, setLoginText] = useState('Login');
  const [disabled, setDisabled] = useState(false);
  const [validateDisabled, setValidateDisabled] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [submitOtp, setSubmitOtp] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const onChangeOtp = (e) => {
    const nOtp = otp;
    nOtp[e.target.name] = e.target.value
    if(e.target.value != "")
      e.target.form[Number(e.target.name) + 1].focus()
    else
    e.target.form[Number(e.target.name) - 1].focus()
    setOtp(nOtp);
    
  }

  const handleOtpSubmit = async(e) => {
    e.preventDefault();
    const response = await post(
      BaseSetting.userApiDomain + '/signUpViaOTP',
      {
        mobile: formData.mobile,
        otp: otp.join(''),
      },
      headers
    );
    const result = response?.data;
    const token = response?.headers['x-auth-token'];
    if (result.status === 1) {
      const drData = await UserApi.getByUserId(result.data?._id);
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
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const response = await post(
      BaseSetting.userApiDomain + '/generateSignUpOTP',
      formData,
      headers
    );
    if (response.data.status === 1) {
      setSubmitOtp(true)
    } else {
      setErr(response.data.data);
    }
    
  }
 

  
  return (
    <div className="grid h-screen  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-montserrat">
      <div className="bg-[#d2e1fe] col-span-1 hidden md:flex lg:flex xl:flex">
        {' '}
        <img className="min-h-screen" src={qurexhome} alt="" />
      </div>
      {/* <OTPComp className="col-span-1" /> */}
      {submitOtp ? <>
        <div className="flex flex-col bg-white">
      <form onSubmit={handleOtpSubmit}>
        <div className="md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16 flex flex-col bg-white">
          <div className="w-9/12 t414 text-[#1C1C1C] mt-16 grid grid-cols-4" >
                { otp && otp.length > 0 && otp.map((x, i) => {
                  return (
                    <div className="col-span-1 ">
                      <input
                        autoComplete={false}
                        key={i}
                        name={i}
                        defaultValue={x}
                        onChange={onChangeOtp}
                        maxlength="1"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                        type="number"
                        className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
                      />
                    </div>
                  )
                })
                }
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
        </div>
      </form>
      <DiscMsg />
    </div>
      </> : <div className="flex flex-col bg-white">
        <form onSubmit={handleFormSubmit}>
          <div className="md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16 flex flex-col bg-white">
            <div className="t414 text-[#1C1C1C] mt-7">Name</div>
            <div className="mt-3">
              <input
                name="name"
                value={formData.name}
                onChange={onChange}
                className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
                placeholder="Please enter Name"
              />
            </div>
            <div className="t414 text-[#1C1C1C] mt-7">Email</div>
            <div className="mt-3">
              <input
                name="email"
                type={'email'}
                value={formData.email}
                onChange={onChange}
                className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
                placeholder="Please enter your email"
              />
            </div>
            <div className="t414 text-[#1C1C1C] mt-7">Mobile Number</div>
            <div className="mt-3">
              <input
                name="mobile"
                value={formData.mobile}
                type={'number'}
                size={10}
                onChange={onChange}
                className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
                placeholder="Please enter your mobile number"
              />
            </div>
            
            {err ? (
              <div className="mt-2 text-[#da232aff] text-sm">{err}</div>
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
          </div>
        </form>
        <DiscMsg />
      </div> }
      
    </div>
  );
};

export default Register;
