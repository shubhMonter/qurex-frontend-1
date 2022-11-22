import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile';
import DeleteProfile from './DeleteProfile';
import doctor from '../../../../assets/pngs/doctor.png';
import {
  FaCheck,
  FaFemale,
  FaMale,
  FaMedkit,
  FaStar,
  FaThumbsUp,
} from 'react-icons/fa';
import {
  AiOutlineCalendar,
  AiOutlineInfoCircle,
  AiOutlineStar,
} from 'react-icons/ai';
import { BiMessageRounded, BiMessageRoundedAdd } from 'react-icons/bi';
import { useEffect } from 'react';
import { dheaders, get, headers } from '../../../../api';
import { BaseSetting } from '../../../../utils/common';
import jwt_decode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const [about, setAbout] = useState(true);
  const [pStory, setPStory] = useState(false);
  const [avail, setAvail] = useState(false);
  const [data, setData] = useState([]);
  const [doctorData, setDoctorData] = useState({});
  const [id, setId] = useState('');
  //console.log(data);
  const auth = useSelector((state) => state.auth);
  let authData = auth.data;

  //console.log(doctorData);
  return (
    <>
      <div className="font-montserrat flex flex-col pl-10 pr-8">
        <div className="text-[#626262] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 shadow-lg rounded-lg rounded-b-none bg-white mt-10 p-7">
          <div className="col-span-1 flex flex-col">
            <div className="mt-1 font-bold text-lg">{authData?.name}</div>
            <div className="mt-1 font-normal text-sm">
              {/* {authData?.drData?.education?.map((item) => (
                <>{item}</>
              ))} */}
            </div>
            <div className="mt-2 font-normal text-sm">
              {authData?.professionalDetail?.specializations[0]}
            </div>
            <div className="flex justify-center py-1 rounded-sm mt-1 w-40 font-medium bg-[#dedbfb] text-sm">
              1 Years Experience
            </div>
            <div className=" mt-2 w-24 py-1 flex justify-center bg-[#dedbfb] font-medium text-sm rounded-sm">
              <div>Treats</div>
              <div className="pt-1 pl-1">
                <FaMale className="text-[#7367f0] " />
              </div>
              <div className="pt-1">
                <FaFemale className="text-[#7367f0] " />
              </div>{' '}
            </div>
          </div>
          <div className="pl-10 col-span-1 grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-cols-2">
            <div className="col-span-1 text-xs flex flex-col">
              <div className="bg-[#eae8fd] w-12 h-12 rounded-full flex justify-center text-base items-center font-semibold text-[#7367f0] ">
                0
              </div>
              <div className="mt-2 text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs ">
                Patient Stories
              </div>
            </div>
            <div className="col-span-1 text-xs flex flex-col">
              <div className="bg-[#eae8fd]  w-12 h-12 rounded-full flex justify-center text-base items-center font-semibold text-[#7367f0] ">
                <div className="">1</div>
                <div>
                  <AiOutlineStar className="text-[#7367f0] " />
                </div>
              </div>
              <div className="mt-2 text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs ">
                Patient Satisfaction
              </div>
            </div>
            <div className="sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 col-span-1 text-xs flex flex-col">
              <div className="bg-[#eae8fd] w-12 h-12 rounded-full flex justify-center text-base items-center font-semibold text-[#7367f0] ">
                <div className="">5</div>
                <div>
                  <AiOutlineStar className="text-[#7367f0]" />
                </div>
              </div>
              <div className="mt-2 text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs ">
                Punctual
              </div>
            </div>
            <div className="sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 col-span-1 text-xs flex flex-col">
              <div className="bg-[#dff7ea] w-12 h-12 rounded-full flex justify-center text-sm items-center font-semibold text-[#2ec973] ">
                100%
              </div>
              <div className="mt-2 text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs ">
                Overall Rating
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 bg-white col-span-2 text-[#626262] grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-4 gap-10 shadow-lg rounded-lg rounded-t-none">
          <div className="col-span-1 grid grid-cols-3">
            <div className="col-span-1">
              <img
                className="rounded-md h-28 pt-2 sm:h-40 md:h-40 lg:h-40 xl:h-40 w-48"
                src={doctor}
                alt="doctor"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="flex justify-center font-semibold text-sm">
                Specialist in Treating
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {authData?.professionalDetail?.treatments
                  ? doctorData.professionalDetail.treatments.map((item) => (
                      <>
                        <div className="col-span-1 flex justify-start py-[1px] bg-[#dedbfb] mt-1 mx-1 rounded-md  text-xs ">
                          <div className="pt-[2px] px-2">
                            <FaCheck />
                          </div>
                          <div className="">Relationship Therapy</div>
                        </div>
                      </>
                    ))
                  : ''}
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="grid grid-cols-3">
              <div className="font-bold text-sm col-span-1 flex flex-col">
                <div>Speaks</div>
                <div>Fee</div>
                <div>Duration</div>
              </div>
              <div className="font-normal text-sm col-span-2 flex flex-col">
                {authData?.languages.length > 0 ? (
                  <div>
                    {authData?.languages?.map((item) => (
                      <>{item},</>
                    ))}
                  </div>
                ) : (
                  'NA'
                )}
                <div>₹ {authData?.drData?.feeCharge}</div>
                <div> 45 minutes</div>
              </div>
            </div>
            {/* <div className="bg-[#7367f0] w-52 rounded-lg text-white flex justify-center py-2 font-semibold mt-10">
              <div className="mt-1">
                <BiMessageRoundedAdd />
              </div>
              <div className="pl-1 ">Book Consultation</div>
            </div> */}
          </div>
        </div>
        <div className="text-[#626262] bg-[#eef0f1] flex flex-col shadow-lg rounded-lg mt-10 p-7">
          <div className="text-sm font-medium  col-span-1 flex flex-row">
            <div
              className={`${
                about
                  ? 'border-2 -mt-1 pb-2 border-transparent border-b-[#7d72f1]'
                  : ''
              } cursor-pointer flex flex-row`}
              onClick={() => {
                setAbout(true);
                setPStory(false);
                setAvail(false);
              }}
            >
              <div className="mt-1 mx-1">
                <AiOutlineInfoCircle />
              </div>
              <div className="drop-shadow-lg">About</div>
            </div>
            <div
              className={`${
                pStory
                  ? 'border-2 -mt-1 pb-2 border-transparent border-b-[#7d72f1]'
                  : ''
              } cursor-pointer flex flex-row ml-10 mr-6`}
              onClick={() => {
                setAbout(false);
                setPStory(true);
                setAvail(false);
              }}
            >
              <div className="mt-1 mx-1">
                <BiMessageRounded />
              </div>
              <div className="drop-shadow-lg">Patient Stories</div>
            </div>
            <div
              className={`${
                avail
                  ? 'border-2 pb-2 -mt-1 border-transparent border-b-[#7d72f1]'
                  : ''
              } cursor-pointer flex flex-row`}
              onClick={() => {
                setAbout(false);
                setPStory(false);
                setAvail(true);
              }}
            >
              <div className="mt-1 mx-1">
                <AiOutlineCalendar />
              </div>
              <div className="drop-shadow-lg">Availability</div>
            </div>
          </div>
          {about ? (
            <>
              <div className="mt-10 p-6 col-span-1 shadow-sm bg-white rounded-lg flex flex-col">
                <div className="text-lg font-semibold">About</div>
                <div className="mt-6 text-sm">
                  A skilled and experienced counsellor, relationship expert and
                  researcher aiming to make a difference in the field of
                  relationship counselling, research and mentoring. She topped
                  Mphil at Utkal University. She is always looking forward to
                  upgrading her knowledge and skills because she feels there's
                  so much to learn from people around her. She is a lively
                  person with a zest for life and one who believes in spreading
                  happiness in the lives of the distressed.
                </div>
              </div>
              <div className="mt-10 col-span-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div className="pl-6 py-6 col-span-1 rounded-md bg-white flex flex-col">
                  <div className="font-semibold text-lg text-black">
                    Experience
                  </div>
                  {authData?.experience
                    ? authData?.experience.map(() => (
                        <>
                          <div className="mt-4 grid grid-cols-5">
                            <div className="col-span-1 flex flex-col">
                              <div className="col-span-1 flex justify-center bg-[#7367f0] rounded-full h-8 w-8 items-center text-white">
                                <FaMedkit />
                              </div>
                              <div className="ml-4 col-span-1 border border-l-2 border-l-gray-300 border-transparent">
                                <p className="opacity-0">h</p>
                              </div>
                            </div>
                            <div className="col-span-3 flex flex-col">
                              <div className="font-semibold text-sm">
                                Psychologist, Relationship Therapist
                              </div>
                              <div className="font-normal text-xs">
                                Qurex Health Technologies
                              </div>
                              <div className="font-normal text-[10px]">
                                Since 2021
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    : ''}
                </div>
                <div className="pl-6 py-6 col-span-1 rounded-md bg-white flex flex-col">
                  <div className="font-semibold text-lg text-black">
                    Education
                  </div>
                  {authData?.education
                    ? authData?.education.map(() => (
                        <>
                          <div className="mt-4 grid grid-cols-5">
                            <div className="col-span-1 flex flex-col">
                              <div className="col-span-1 flex justify-center bg-[#7367f0] rounded-full h-8 w-8 items-center text-white">
                                <FaMedkit />
                              </div>
                              <div className="ml-4 col-span-1 border border-l-2 border-l-gray-300 border-transparent">
                                <p className="opacity-0">h</p>
                              </div>
                            </div>
                            <div className="col-span-3 flex flex-col">
                              <div className="font-semibold text-sm">
                                Psychologist, Relationship Therapist
                              </div>
                              <div className="font-normal text-xs">
                                Qurex Health Technologies
                              </div>
                              <div className="font-normal text-[10px]">
                                Since 2021
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    : ''}
                </div>
                <div className="pl-6 py-6 col-span-1 rounded-md bg-white flex flex-col">
                  <div className="font-semibold text-lg text-black">
                    Awards & Affiliations
                  </div>
                  {authData?.awards
                    ? authData?.awards.map(() => (
                        <>
                          <div className="mt-4 grid grid-cols-5">
                            <div className="col-span-1 flex flex-col">
                              <div className="col-span-1 flex justify-center bg-[#7367f0] rounded-full h-8 w-8 items-center text-white">
                                <FaMedkit />
                              </div>
                              <div className="ml-4 col-span-1 border border-l-2 border-l-gray-300 border-transparent">
                                <p className="opacity-0">h</p>
                              </div>
                            </div>
                            <div className="col-span-3 flex flex-col">
                              <div className="font-semibold text-sm">
                                Psychologist, Relationship Therapist
                              </div>
                              <div className="font-normal text-xs">
                                Qurex Health Technologies
                              </div>
                              <div className="font-normal text-[10px]">
                                Since 2021
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    : ''}
                </div>
              </div>
            </>
          ) : pStory ? (
            ['1', '2', 'd'].map((item) => (
              <>
                <div className="mt-10 p-6 col-span-1 shadow-sm bg-white rounded-lg flex justify-between">
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg mb-5">
                      Anonymous,Verified
                    </div>
                    <div>No</div>
                  </div>
                  <div className="bg-[#eef0f1] rounded-full h-8 w-8 flex justify-center items-center ">
                    <FaThumbsUp />
                  </div>
                </div>
              </>
            ))
          ) : (
            <div className="mt-10 p-6 col-span-1 shadow-sm bg-white rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
              <div className="col-span-2 flex flex-col">
                <div className="text-lg font-semibold">
                  Slots Available Thu 1st Jan, 1970
                </div>
                <div className="text-sm font-semibold my-3">Morning</div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                  {[1, 2, 2, 2, 2, 2, 2].map((i) => (
                    <div className="col-span-1 border flex justify-center py-2 hover:bg-opacity-20 hover:bg-[#7367f0] cursor-pointer text-[#7367f0] border-[#7367f0] ">
                      04:30 AM
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold mb-3 mt-8">Afternoon</div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                  {[1, 2, 2, 2, 2, 2, 2].map((i) => (
                    <div className="col-span-1 border flex justify-center py-2 hover:bg-opacity-20 hover:bg-[#7367f0] cursor-pointer text-[#7367f0] border-[#7367f0] ">
                      04:30 AM
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold mb-3 mt-8">Evening</div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                  {[1, 2, 2, 2, 2, 2, 2].map((i) => (
                    <div className="col-span-1 border flex justify-center py-2 hover:bg-opacity-20 hover:bg-[#7367f0] cursor-pointer text-[#7367f0] border-[#7367f0] ">
                      04:30 AM
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:ml-10 lg:ml-10 xl:ml-10 mt-10 md-10 lg-10 xl-10 col-span-1 font-semibold text-lg">
                Choose Another Day
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export { UpdateProfile, DeleteProfile };
export default Profile;
