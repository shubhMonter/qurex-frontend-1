import React from 'react';
import DoctorAbout from '../components/doctorComponents/DoctorAbout';
import DoctorHero from '../components/doctorComponents/DoctorHero';
import FeedBack from '../components/homecomponents/FeedBack';
import Footer from '../components/Footer';
import DoctorcoursesVideo from '../components/doctorComponents/DoctorcoursesVideo';
import { useSelector } from 'react-redux';

const Doctor = () => {
  const drDetail = useSelector((state) => state.doctor.drUserData);
  let drDetailData = drDetail;
  return (
    <>
      <DoctorHero drDetailData={drDetailData} />
      <DoctorAbout drDetailData={drDetailData} />
      <DoctorcoursesVideo drDetailData={drDetailData} />
      <FeedBack drDetailData={drDetailData} />
      <Footer />
    </>
  );
};

export default Doctor;
