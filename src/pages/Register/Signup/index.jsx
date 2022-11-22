import { useRef, useState } from 'react';
import DiscMsg from '../../../common/components/DisclaimerMsg';
import OTPComp from '../OTP';
import { get, headers, post, put } from '../../../api';
import { BaseSetting } from '../../../utils/common';
import { Link } from 'react-router-dom';
import RegisterDetails from '../RegisterDetails';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../state/auth/Actions';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Signup = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [buttonText, setButtonText] = useState('Login');

  const [disabled, setDisabled] = useState(false);
  const [inputs, setInputs] = useState({});
  const [otpcomp, setOtpComp] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const mobileRef = useRef(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
      fname: '',
      role: '',
      email: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .max(10, 'Name must be 10 Digits')
        .min(10, 'Name must be 10 Digits')
        .required('Required'),
      password: Yup.string().required('Required'),
      role: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const inputs = {
        mobile: values.mobile,
        password: values.password,
        name: values.fname,
        role: values.role,
        email: values.email,
      };
      // console.log(inputs);
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
          BaseSetting.userApiDomain + '/register',
          inputs
        );
        const result = response.data;
        console.log(result);
        if (result.status === 1) {
          let userHeaders = response.headers;
          let token = userHeaders['x-auth-token'];
          let header2 = {
            Accept: 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-auth-token': token,
          };

          const response2 = await get(
            BaseSetting.userApiDomain + '/me',
            header2
          );
          if (response2?.data?.status === 1) {
            let res = response2?.data?.data;
            dispatch(setAuth(res));
            navigate('/');
          } else {
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="flex flex-col bg-white">
      <form onSubmit={formik.handleSubmit}>
        <div className=" md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
          <div className="t730 text-[#1C1C1C] h-9 ">Sign up</div>
          <div className="t414 text-[#1C1C1C] opacity-50 h-4 mt-4">
            Welcome! Please enter your mobile number to get OTP
          </div>
          <div className="t414 text-[#1C1C1C] mt-6">Mobile Number</div>
          <div className="mt-3">
            <input
              name="mobile"
              type="text"
              placeholder="Enter Mobile Number"
              className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
              value={formik.values.mobile}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.mobile ? (
            <p className="text-xs text-red-600 ">{formik.errors.mobile}</p>
          ) : null}
          <div className="t414 text-[#1C1C1C] mt-6">Password</div>
          <div className="mt-3">
            <input
              name="password"
              className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
              placeholder="Enter Password "
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.password ? (
            <p className="text-xs text-red-600 ">{formik.errors.password}</p>
          ) : null}
          <div className="t414 text-[#1C1C1C] mt-10">Full Name</div>
          <div className="mt-3">
            <input
              name="fname"
              className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
              placeholder="Enter Full Name"
              value={formik.values.fname}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.fname ? (
            <p className="text-xs text-red-600 ">{formik.errors.fname}</p>
          ) : null}
          <div className="t414 text-[#1C1C1C] mt-6">
            Role
            <div className="mt-3">
              <select
                name="role"
                className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
                value={formik.values.role}
                onChange={formik.handleChange}
              >
                <option className="outline-none" value="patient">
                  Patient
                </option>
                <option className="outline-none" value="doctor">
                  Doctor
                </option>
              </select>
              {formik.errors.role ? (
                <p className="text-xs text-red-600 ">{formik.errors.role}</p>
              ) : null}
            </div>
          </div>
          {/* <div className="t414 text-[#1C1C1C] mt-6">City</div>
          <div className="mt-3">
            <input
              name="city"
              value={inputs.value}
              onChange={handleChange}
              type="text"
              className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
              placeholder="Enter City"
            />
          </div> */}
          <div className="t414 text-[#1C1C1C] mt-6">Email Id</div>
          <div className="mt-3">
            <input
              name="email"
              type="email"
              className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
              placeholder="Enter Email Id"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.email ? (
            <p className="text-xs text-red-600 ">{formik.errors.email}</p>
          ) : null}
          <div className="flex flex-row mt-3">
            <div>
              <input type="checkbox" />
            </div>
            <div className="ml-2 t514">
              I agree to Qurex's Terms of Use & Privacy Policy.
            </div>
          </div>
          <div className="">
            <button
              className={`${
                disabled ? 'opacity-75' : ''
              } bg-[#1C5BD9] py-3 rounded-3xl w-9/12 mt-16 text-white t714`}
              disabled={disabled}
            >
              {buttonText}
            </button>
          </div>

          <div className="mt-5  ml-9 flex flex-row t514 text-[#666666] ">
            <div className="">Already have an account?</div>
            <div className="text-[#1C5BD9] ">
              <Link className="no-underline pl-[2px]" to="/login">
                Login Here.
              </Link>
            </div>
          </div>
        </div>
      </form>
      <DiscMsg />
    </div>
  );
};

export default Signup;
