import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/doctor.css';

const DoctorHero = ({ drDetailData }) => {
const auth = useSelector((state) => state.auth);
const docName = drDetailData?.userId.name;
let docDesig = drDetailData?.experience.reduce((prevValue, item) =>  prevValue + item.designation + " | ",' ');
docDesig = docDesig.substring(0,docDesig.length - 2);
let docSpec = drDetailData?.professionalDetail.specializations.reduce((prevValue, item) =>  prevValue + item+ " | ",' ');
docSpec = docSpec.substring(0,docSpec.length - 2);
let docTreatments = drDetailData?.professionalDetail.treatments.reduce((prevValue, item) =>  prevValue + item+ ", ",' ');
docTreatments = docTreatments.substring(0,docTreatments.length - 2);
var userData = auth?.data;

useEffect(() => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
});

  return (
    <div className="py-5 container-fluid doctorHeroSection">
      <div className="row">
        <div className="col-12 col-md-6 justify-content-center">
          <img
            src={drDetailData.userId.profilePic}
            className="rounded-circle drHeroImg m-auto block"
          />
        </div>
        <div className="mt-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start ">
          <div className="d-flex align-items-center">
            <h1 className="fw-bolder">{docName}</h1>
            <p className="mx-2 mt-2 btn btn-primary btn-sm rounded-pill">
              {docSpec}
            </p>
          </div>
          <p className="flex fw-bolder">
            Expert in {docTreatments}
          </p>
          <p className="fw-bolder ">{`22`}+ Cases Solved</p>
          <p className="fw-bolder">
            ₹ {drDetailData?.feeCharge} Consulting Fee
          </p>
          <p>( 30% discount for Qurex user )</p>
          <div className="d-flex">
            <button
              type="button"
              className="mr-2 btn btn-outline-primary rounded-pill"
            >
              <BsPlayCircleFill className="playBtnHero" color="#0d6efd" /> Watch Now
            </button>
            <Link to={drDetailData?.userId?.name ? '/booking-calendar': '/login'}>
              <button
                type="button"
                className="mx-2 btn btn-primary rounded-pill"
              >
                Consult Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHero;
