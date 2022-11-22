import Home from './Home';
import qurexhome1 from '../../assets/pngs/qurexhome1.png';
const Register = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-montserrat">
      <div className="bg-[#d2e1fe]  col-span-1 hidden md:flex lg:flex xl:flex">
        <img className="h-screen" src={qurexhome1} alt="" />
      </div>
      <Home className="col-span-1" />
    </div>
  );
};

export default Register;
