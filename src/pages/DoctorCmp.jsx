import React from 'react';
import DoctorAbout from '../components/doctorComponents/DoctorAbout';
import DoctorHero from '../components/doctorComponents/DoctorHero';
import FeedBack from '../components/homecomponents/FeedBack';
import Footer from '../components/Footer';
import DoctorcoursesVideo from '../components/doctorComponents/DoctorcoursesVideo';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Doctor = () => {
  const {id}= useParams();
  console.log(id);
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
