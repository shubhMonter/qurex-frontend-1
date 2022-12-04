import React, {  useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { CiGlobe } from 'react-icons/ci';
import { SlGraduation } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
import '../../styles/doctor.css';
import moreDoc from '../../assets/svgs/moreDoc.svg';
import pointerIcon from '../../assets/svgs/pointerIcon.svg';
const DoctorData = ({ drDetailData }) => {

  const [isOpened, setIsOpened] = useState(false);

  function showHideDetails() {
    setIsOpened(wasOpened => !wasOpened);
  }
  
  return (
    <div className="container">
      <div className="row">
      <div className="col-12">
          <div className="pb-12">
            Dr. {drDetailData?.userId?.name} is a well known men & women's sexual health expert. She has obtained his MBBS and DGO degrees from Netaji Subhash Chandra bose Medical College. <br/>
            { !isOpened && (<a className="linkTag" onClick={() => showHideDetails()}>Show More</a>)}
          </div>
        </div>

        {isOpened && (
          <div className="col-12 showMoreDetails pb-12">
            <div>
              {/* <img src={moreDoc}/>
              <img src={availability}/> */}
              <br/>
              <div className="row pb-2.5">
                <div className="col-md-6 col-sm-6 col-lg-6 border docMoreInfo rounded bg-[#fbfbfb] p-1">
                  <div className="p-3">
                    <h5 className="font-bold pb-3">Experience</h5>

                    {drDetailData?.experience?.map((item,index) => (
                    <div className="expDoc row m-auto pb-2 inline-flex text-sm">
                      <div className="col-md-3 col-sm-3 col-lg-3">
                      <img src={pointerIcon} />
                      </div>
                      <div className="col-md-8 col-sm-8 col-lg-8">
                        <span className="font-bold">{item.designation}</span>
                        <p>{item.hospitalName}</p>
                        <span className="text-slate-400">Since {item.from.slice(0,4)}</span>
                      </div>
                    </div>
                    ))}
                    
                  </div>
                </div>
                {/* <div className="col-md-1 col-sm-1 col-lg-1">
                </div> */}
                <div className="col-md-6 col-sm-6 col-lg-6 border docMoreInfo rounded bg-[#fbfbfb] p-1 ml-3">
                  <div className="p-3">
                    <h5 className="font-bold pb-3">Awards & Affiliations</h5>
                    
                    {drDetailData?.experience?.map((item,index) => (
                    <div className="expDoc row m-auto pb-2 inline-flex text-sm">
                      <div className="col-md-3 col-sm-3 col-lg-3">
                      <img src={pointerIcon} />
                      </div>
                      <div className="col-md-8 col-sm-8 col-lg-8">
                        <span className="font-bold">{item.designation}</span>
                        <p>{item.hospitalName}</p>
                        <span className="text-slate-400">Since {item.from.slice(0,4)}</span>
                      </div>
                    </div>
                    ))}

                  </div>
                </div>

              </div>


              <div className="row shadow pb-2.5 pt-2.5 bg-[#fbfbfb]">
                <div className="col-md-12 col-sm-12 col-lg-12 p-1">
                  <div className="p-3">
                    <h5 className="font-bold pb-3">Availabilities</h5>

                    {drDetailData?.businessHours?.map((item,index) => (
                    <div className="expDoc m-auto pb-2 pl-12 text-sm block">
                      <span className="font-bold avlDay">{item.day}</span>
                      <span className="pl-12 avlTime">
                      {item?.slots?.map((timeSlot,index) => (
                        <>{timeSlot.from} to {timeSlot.to},</>
                      ))}
                      </span>
                    </div>
                    ))}

                  </div>
                </div>
                </div>
            <a className="linkTag" onClick={() => showHideDetails()}>Show Less</a>
            </div>
          </div>
        )}

        <div className="col-12">
          <div className="d-flex">
            <AiOutlineCalendar size={25} color="#6F6FFF" />
            <p className="mx-2">
              {drDetailData?.experience?.length > 0
                ? drDetailData?.experience?.length
                : 'NA'}{' '}
              years of experience
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <CiGlobe size={25} color="#6F6FFF" />
            <p className="mx-2">
              Language known{' '}
              {drDetailData?.languages?.map((item) => (
                <>{item}</>
              ))}
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <SlGraduation size={25} color="#6F6FFF" />
            <p className="mx-2">MBBS, MD (Psychiatry)</p>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <BsTelephone size={20} color="#6F6FFF" />
            <p className="mx-2">Available on chat, live, and voice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorData;
