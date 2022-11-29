
import qurexhome  from '../../assets/pngs/qurexhome.png';
import { useEffect, useState } from 'react';
import DiscMsg from '../../common/components/DisclaimerMsg';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { SignInOTP, SignUpOTP } from '../../preseneter/Auth/auth';
import CommonOTP from '../../common/components/OTP/commonOtp';

const Register = () => {
  const [formData, setFormData] = useState({name:'',email:'',mobile:''});
  const [buttonText] = useState('Get OTP');
  const [loginText] = useState('Login');
  const [disabled] = useState(false);
  const [submitOtp, setSubmitOtp] = useState(false);
  const [err, setErr] = useState({
    error: '',
    show:false
  });
  const navigate = useNavigate();
  const Auth = useSelector((state) => state.auth.authData);
  const AuthError = useSelector((state) => state.auth.authError)

  const onChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleOtpSubmit = async(e,otp) => {
    e.preventDefault();
    const { mobile } = formData;
    SignInOTP({
      mobile,
      otp
    })
  }

  useEffect(() => {
    if (Auth.isAuthenticated) {
      navigate('/');
    }
  }, [Auth.isAuthenticated])
  useEffect(() => {
    setErr(AuthError)
  },[AuthError])

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setErr({
      error: '',
      show:false
    })
    const response = await SignUpOTP(formData)
    if (response.data.status === 1) {
      setSubmitOtp(true)
    } else {
      setErr({error:response.data.data,show:true});
    }
    
  }
 

  
  return (
    <div className="grid h-screen  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-montserrat">
      <div className="bg-[#d2e1fe] col-span-1 hidden md:flex lg:flex xl:flex">
        {' '}
        <img className="min-h-screen" src={qurexhome} alt="" />
      </div>
      {/* <OTPComp className="col-span-1" /> */}
      {submitOtp ? (
        <div className="md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16 flex flex-col bg-white">
          <CommonOTP handleOtpSubmit={handleOtpSubmit} err={err} loginText={loginText} validateDisabled={false} />
        </div>) : <div className="flex flex-col bg-white">
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
                  autoComplete='false'
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
                autoComplete='false'
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
                  autoComplete='false'
              />
            </div>
            
            {err.show ? (
              <div className="mt-2 text-[#da232aff] text-sm">{err.error}</div>
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
