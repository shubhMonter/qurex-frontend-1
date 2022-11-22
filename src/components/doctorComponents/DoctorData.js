import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { CiGlobe } from 'react-icons/ci';
import { SlGraduation } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
import '../../styles/doctor.css';
import moreDoc from '../../assets/svgs/moreDoc.svg';
import availability from '../../assets/svgs/availability.svg';


// let showMore = false;
// const showHideDetails = (showSec) => {
//   alert(showSec);
//   showMore = showSec;
// };

const DoctorData = ({ drDetailData }) => {

  const [isOpened, setIsOpened] = useState(false);

  function showHideDetails() {
    setIsOpened(wasOpened => !wasOpened);
  }
  
  return (
    <div className="container">
      <div className="row">
      <div className="col-12">
          <div className="btmSpace">
            Dr. {drDetailData?.drUserData?.name} is a well known men & women's sexual health expert. She has obtained his MBBS and DGO degrees from Netaji Subhash Chandra bose Medical College. <br/>
            { !isOpened && (<a className="linkTag" onClick={() => showHideDetails()}>Show More</a>)}
          </div>
        </div>

        {isOpened && (
          <div className="col-12 showMoreDetails btmSpace">
            <div>
              <img src={moreDoc}/>
              <br/>
              <img src={availability}/>
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
              {drDetailData?.drUserData?.languages?.map((item) => (
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
