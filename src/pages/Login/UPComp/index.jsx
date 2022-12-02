import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { emailRegEx, mobileRegEx } from '../../../utils/regex';
import { SignInWithPass } from '../../../preseneter/Auth/auth';

const UPComp = () => {
  const [buttonText, setButtonText] = useState('Login');
  const [disabled, setDisabled] = useState(false);
  const [upInputs, setUpInputs] = useState({});
  const [errMsg, setErrMsg] = useState({ error: '', show: false });
  const auth = useSelector(state => state.auth.authData.isAuthenticated);
  const error = useSelector(state => state.auth.authError);

  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [auth])
  useEffect(() => {
    setErrMsg(error)
  },[error])
  const handleUPChange = (e) => {
    setErrMsg({error:'',show:false})
    let name = e.target.name;
    const value = e.target.value;
    let loginId = upInputs;
    if (name === 'userId') {
      if(value !==''){
      if (mobileRegEx.test(value)) {
        name = 'mobile'
        if (loginId.hasOwnProperty('email')) {
          delete loginId.email;
          setUpInputs(loginId)
        }
      } else if (emailRegEx.test(value)) {
        name = 'email'
        if (loginId.hasOwnProperty('mobile')) {
          delete loginId.mobile;
          setUpInputs(loginId)
        }
      } else {
        setErrMsg({error:'Invalid Mobile Number or Email Id',show:true});
        setDisabled(true);
        return;
      }}
    }
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
        setErrMsg( {error:'Invalid Mobile Number',show:true});
        setDisabled(true);
        return;
      } else {
        setErrMsg({error:'',show:false});
        setDisabled(false);
      }
    }
    setUpInputs((values) => ({ ...values, [name]: value }));
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
    SignInWithPass(upInputs);
  
  };
  return (
    <form onSubmit={(e) => handleUPSubmit(e)}>
      <div className="t414 text-[#1C1C1C] mt-7">Mobile Number / Email Id</div>
      <div className="mt-3">
        <input
          name="userId"
          onChange={()=>setErrMsg({error:'',show:false})}
          onBlur={handleUPChange}
          className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
          placeholder="enter your mobile number or email id"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="t414 text-[#1C1C1C] ">Password</div>
        <div className="text-[#1C5BD9] t512 mr-28 cursor-pointer">
          Forgot password?
        </div>
      </div>
     
      <div className="mt-3">
        <input
          name="password"
          onBlur={handleUPChange}
          type="password"
          onChange={handleUPChange}
          className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Enter your Password"
        />
      </div>
      {errMsg.show && (
        <div className="mt-2 text-[#da232aff] text-sm">{errMsg.error}</div>
      ) }
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
