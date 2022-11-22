import React from 'react';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
const DiscMsg = () => {
  return (
    <div className="bg-[#F1F1FF] flex flex-col  m-10 p-5 rounded-md">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <div className="mt-[2px]">
            <BsFillExclamationCircleFill className=" text-[#6200AF]" />
          </div>
          <div className=" ml-2 t616 text-[#333333] ">Disclaimer Message</div>
        </div>
        <div className="">x</div>
      </div>
      <div className="text-[#1C1C1C] t414 mt-7">
        <ul className="ml-12 list-disc  text-[13px] ">
          <li className="mt-2">
            Your first name is not visible to Qurex support members but just the
            doctor
          </li>
          <li className="mt-2">
            Your personal details are mandatory for a doctor consultation as per
            government policy, please be assured ‘we respect your privacy’
          </li>
          <li className="mt-2">
            Email is required for important treatment related conversation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DiscMsg;
