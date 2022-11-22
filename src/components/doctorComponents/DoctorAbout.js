import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChatQuote } from 'react-icons/bs';
import DoctorData from './DoctorData';
import doctorApi from '../../api/doctorAPI';
import '../../styles/doctor.css';
import quote from '../../assets/svgs/quote.svg';
import floatCall from '../../assets/svgs/floatCall.svg';

const DoctorAbout = ({ drDetailData }) => {
  return (
    <div className="container mt-3 mb-5">
      <h3>About {drDetailData?.drUserData?.name}</h3>

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
              Hi, I am {drDetailData?.drUserData?.name}, I have done{' '}
              {drDetailData?.drUserData?.education?.map((item) => (
                <>{item.degree}</>
              ))}{' '}
              from{' '}
              {drDetailData?.drUserData?.education?.map((item) => (
                <>{item.institution}</>
              ))}{' '}
              College.
            </p>
            <h5 className="p-4"> {drDetailData?.drUserData?.name}</h5>
          </div>
        </div>
        {/* <img src={floatCall} className="floatCallImg"/> */}
      </div>
    </div>
  );
};

export default DoctorAbout;
