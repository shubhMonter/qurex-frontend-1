import React from 'react';
import DoctorData from './DoctorData';
import '../../styles/doctor.css';
import quote from '../../assets/svgs/quote.svg';


const doctorAbout = ({ drDetailData }) => {
  return (
    <div className="container mt-3 mb-5">
      <h3 className="font-bold pt-1.5">About {drDetailData?.userId?.name.split(" ")[0]}</h3>

      <div className="row justify-content-between">
        <div className="col-12 col-lg-8">
          <DoctorData drDetailData={drDetailData} />
        </div>
        <div className="col-12 col-lg-4">
          <div className="border shadow">
          {/* <BsChatQuote className="quoteBtn"/>*/}
          <img src={quote} className="quoteBtn"/>
            <p className="px-4 pt-4">
              {drDetailData?.professionalDetail?.about}
              Hi, I am {drDetailData?.userId?.name}, I have done{' '}
              {drDetailData?.education?.map((item) => (
                <>{item.degree}</>
              ))}{' '}
              from{' '}
              {drDetailData?.education?.map((item) => (
                <>{item.institution}</>
              ))}{' '}
              College.
            </p>
            <h5 className="p-4"> {drDetailData?.userId?.name}</h5>
          </div>
        </div>
        {/* <img src={floatCall} className="floatCallImg"/> */}
      </div>
    </div>
  );
};

export default doctorAbout;
