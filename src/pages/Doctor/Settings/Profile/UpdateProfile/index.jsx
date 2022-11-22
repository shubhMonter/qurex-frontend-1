import React, { useState } from 'react';
import AccountDetail from './AccountDetail';
import Award from './Award';
import EducationalDetail from './EducationalDetail';
import ExperienceDetail from './ExperienceDetail';
import PersonalDetail from './PersonalDetail';
import Professional from './Professional';

import { BsGlobe, BsNewspaper } from 'react-icons/bs';
import {
  AiOutlineCamera,
  AiOutlineMessage,
  AiOutlineLock,
} from 'react-icons/ai';
import { FiFeather } from 'react-icons/fi';
import ProfessionalDetail from './Professional';

const UpdateProfile = () => {
  const [personal, setPersonal] = useState(true);
  const [professional, setProfessional] = useState(false);
  const [educational, setEducational] = useState(false);
  const [experience, setExperience] = useState(false);
  const [award, setAward] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <div className="text-[#636363] font-montserrat flex flex-col px-10">
      <div className="py-6 font-semibold text-2xl ">Account Settings</div>
      <div className="grid grid-cols-4 gap-10">
        <div className="text-black flex flex-col col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <div
            className={`${
              personal ? 'bg-[#7367f0] text-white' : ''
            } cursor-pointer hover:bg-[#7367f0] pl-3 hover:text-white my-1 rounded-md py-1.5  flex flex-row`}
            onClick={() => {
              setPersonal(true);
              setProfessional(false);
              setEducational(false);
              setExperience(false);
              setAward(false);
              setAccount(false);
            }}
          >
            <div className="mt-[2px] mr-2 ">
              <BsGlobe />
            </div>
            <div className="text-sm ">Personal Details</div>
          </div>
          <div
            className={`${
              professional ? 'bg-[#7367f0] text-white' : ''
            } cursor-pointer hover:bg-[#7367f0] pl-3 hover:text-white my-1 rounded-md py-1.5  flex flex-row`}
            onClick={() => {
              setPersonal(false);
              setProfessional(true);
              setEducational(false);
              setExperience(false);
              setAward(false);
              setAccount(false);
            }}
          >
            <div className="mt-[2px] mr-2 ">
              <AiOutlineLock />
            </div>
            <div className="text-sm ">Professional Details</div>
          </div>
          <div
            className={`${
              educational ? 'bg-[#7367f0] text-white' : ''
            } cursor-pointer hover:bg-[#7367f0] pl-3 hover:text-white my-1 rounded-md py-1.5  flex flex-row`}
            onClick={() => {
              setPersonal(false);
              setProfessional(false);
              setEducational(true);
              setExperience(false);
              setAward(false);
              setAccount(false);
            }}
          >
            <div className="mt-[2px] mr-2 ">
              <BsNewspaper />
            </div>
            <div className="text-sm ">Educational Details</div>
          </div>
          <div
            className={`${
              experience ? 'bg-[#7367f0] text-white' : ''
            } cursor-pointer hover:bg-[#7367f0] pl-3 hover:text-white my-1 rounded-md py-1.5  flex flex-row`}
            onClick={() => {
              setPersonal(false);
              setProfessional(false);
              setEducational(false);
              setExperience(true);
              setAward(false);
              setAccount(false);
            }}
          >
            <div className="mt-[2px] mr-2 ">
              <AiOutlineCamera />
            </div>
            <div className="text-sm ">Experience Details</div>
          </div>
          <div
            className={`${
              award ? 'bg-[#7367f0] text-white' : ''
            } cursor-pointer hover:bg-[#7367f0] pl-3 hover:text-white my-1 rounded-md py-1.5  flex flex-row`}
            onClick={() => {
              setPersonal(false);
              setProfessional(false);
              setEducational(false);
              setExperience(false);
              setAward(true);
              setAccount(false);
            }}
          >
            <div className="mt-[2px] mr-2 ">
              <FiFeather />
            </div>
            <div className="text-sm ">Awards and Affiliations</div>
          </div>
          {/* <div
            className={`${
              account ? 'bg-[#7367f0] text-white' : ''
            } cursor-pointer hover:bg-[#7367f0] pl-3 hover:text-white my-1 rounded-md py-1.5  flex flex-row`}
            onClick={() => {
              setPersonal(false);
              setProfessional(false);
              setEducational(false);
              setExperience(false);
              setAward(false);
              setAccount(true);
            }}
          >
            <div className="mt-[2px] mr-2 ">
              <AiOutlineMessage />
            </div>
            <div className="text-sm ">Account Details</div>
          </div> */}
        </div>
        <div className="text-[#626262]  col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3 bg-white rounded-md shadow-lg">
          {personal ? (
            <PersonalDetail />
          ) : professional ? (
            <ProfessionalDetail />
          ) : educational ? (
            <EducationalDetail />
          ) : experience ? (
            <ExperienceDetail />
          ) : award ? (
            <Award />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export {
  AccountDetail,
  Award,
  EducationalDetail,
  ExperienceDetail,
  PersonalDetail,
  Professional,
};
export default UpdateProfile;
