import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsPlayCircleFill } from 'react-icons/bs';
import doc3 from '../../assets/svgs/doc3.svg';
import { get, headers } from '../../api';
import { BaseSetting } from '../../utils/common';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../state/auth/Actions';
import doctorApi from '../../api/doctorAPI';
import { addData } from '../../state/doctor/Actions';
import '../../styles/doctor.css';

const DoctorHero = ({ drDetailData }) => {
const auth = useSelector((state) => state.auth.authData);
const docName = drDetailData?.userId.name;
const docDesig = drDetailData?.experience[0]?.designation;
const docDegree = drDetailData?.education[0].degree;
const docAvl = drDetailData?.businessHours[0]?.slots[0]?.from + " to " + drDetailData?.businessHours[0]?.slots[0]?.to
var userData = auth?.data;

useEffect(() => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
});

  return (
    <div className="py-5 container-fluid doctorHeroSection">
      <div className="row">
        <div className="col-12 col-md-6 justify-content-center">
          <img
            // src="https://quer.vercel.app/static/media/dranita.66f4e152a5afe7abebb0.png"
            src={drDetailData.userId.profilePic}
            className="rounded-circle drHeroImg m-auto block"
          />
        </div>
        <div className="mt-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start ">
          <div className="d-flex align-items-center">
            <h1 className="fw-bolder">{docName}</h1>
            <p className="mx-2 mt-2 btn btn-primary btn-sm rounded-pill">
              {/* {drDetailData?.professionalDetail?.specializations[0]} */}
              {docDesig}
            </p>
          </div>
          <p className="flex fw-bolder">
            Expert in
            Obstetrician, Gynaecologist, Infertility
            {/* {drDetailData?.professionalDetail.treatments} */}
            {drDetailData?.professionalDetail?.treatments.map((item, index) => (
              <div className="flex"> {item},</div>
            ))}
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
            <Link to={userData?.name ? '/booking-calendar': '/login'}>
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
