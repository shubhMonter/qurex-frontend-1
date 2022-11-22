import OTP from './OTP';
import RegisterDetails from './RegisterDetails';
import Signup from './Signup';
import qurexhome from '../../assets/pngs/qurexhome.png';
import OTPComp from './OTPComp';

const Register = () => {
  return (
    <div className="grid h-screen  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-montserrat">
      <div className="bg-[#d2e1fe] col-span-1 hidden md:flex lg:flex xl:flex">
        {' '}
        <img className="min-h-screen" src={qurexhome} alt="" />
      </div>
      <OTPComp className="col-span-1" />
    </div>
  );
};

export default Register;
