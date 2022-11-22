import { useState } from 'react';
import { Link } from 'react-router-dom';
import OTPComp from '../OTPComp';
import UPComp from '../UPComp';
const Home = () => {
  const [byPass, setByPass] = useState(false);

  return (
    <div className="flex flex-col bg-white">
      <div className=" md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
        <div className="t730 text-[#1C1C1C] h-9 ">Login</div>
        <div className="t414  text-[#1C1C1C] opacity-50 h-4 mt-4">
          Welcome Back! Login to Qurex using OTP or password.
        </div>
        <div className="mt-10 t518 text-[#1C1C1C] opacity-70 flex flex-row">
          <div
            className={`cursor-pointer rounded pb-2 border-2 border-transparent ${
              byPass ? '' : 'border-b-[#1C5BD9] text-[#1C5BD9]'
            } `}
            onClick={() => setByPass(false)}
          >
            Use OTP
          </div>
          <div
            className={`ml-4 cursor-pointer rounded pb-2 border-2 border-transparent ${
              byPass ? 'border-b-[#1C5BD9] text-[#1C5BD9]' : ''
            } `}
            onClick={() => setByPass(true)}
          >
            Use Password
          </div>
        </div>

        {byPass ? <UPComp /> : <OTPComp />}

        <div className="mt-4 ml-9 flex flex-row t514 text-[#666666] ">
          <div className="">Don’t have an account? </div>
          <div className="text-[#1C5BD9] pl-1">
            <Link className="no-underline pl-[2px] " to="/register">
              Register here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
