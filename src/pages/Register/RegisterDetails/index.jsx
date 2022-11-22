import { useState } from 'react';
import { Link } from 'react-router-dom';
import { headers, post } from '../../../api';
import { BaseSetting } from '../../../utils/common';

const RegisterDetails = ({ mobileNo }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  const postData = async () => {
    try {
      if (navigator.onLine) {
        const response = await post(
          BaseSetting.userApiDomain + '/register',
          { ...inputs, mobile: mobileNo },
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;
        console.log(result);
        if (result.status == 1) {
          console.log(result.data);
          alert('Success');
        } else {
          alert(result.data);
        }
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
      <div className="t730 text-[#1C1C1C] h-9 ">Register your details</div>
      <div className="t414 text-[#1C1C1C] opacity-50 h-4 mt-4">
        Welcome! Please enter your details.
      </div>
      <div className="t414 text-[#1C1C1C] mt-10">Full Namejhjh</div>
      <div className="mt-3">
        <input
          name="name"
          value={inputs.name}
          onChange={handleChange}
          className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Enter Full Name"
        />
      </div>
      <div className="t414 text-[#1C1C1C] mt-6">Mobile Number</div>
      <div className="mt-3">
        <input
          disabled
          className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
          placeholder={mobileNo}
        />
      </div>
      <div className="t414 text-[#1C1C1C] mt-6">City</div>
      <div className="mt-3">
        <input
          className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Enter City"
        />
      </div>
      <div className="t414 text-[#1C1C1C] mt-6">Email Id</div>
      <div className="mt-3">
        <input
          name="email"
          value={inputs.value}
          onChange={handleChange}
          type="email"
          className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Enter Email Id"
        />
      </div>
      <div className="t414 text-[#1C1C1C] mt-6">Password (Optional)</div>
      <div className="mt-3">
        <input
          name="password"
          value={inputs.value}
          onChange={handleChange}
          className="py-2 pl-2 rounded-md border w-full text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Enter Password "
        />
      </div>
      <div className="flex flex-row mt-3">
        <div>
          <input type="checkbox" />
        </div>
        <div className="ml-2 t514">
          I agree to Qurex's Terms of Use & Privacy Policy.
        </div>
      </div>
      <div className="" onClick={(e) => handleSubmit(e)}>
        <button className="bg-[#1C5BD9] py-3 rounded-3xl w-full mt-16 text-white t714">
          Register
        </button>
      </div>
      <div className="flex justify-center mt-5 ml-9  t514 text-[#666666] ">
        <div className="">Already have an account? </div>
        <div className="text-[#1C5BD9] ">
          <Link className="no-underline pl-[2px]" to="/login">
            Login Here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterDetails;
