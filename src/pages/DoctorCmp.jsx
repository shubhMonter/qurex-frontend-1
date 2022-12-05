import React, { useEffect, useState } from "react";
import DoctorAbout from "../components/doctorComponents/DoctorAbout";
import DoctorHero from "../components/doctorComponents/DoctorHero";
import FeedBack from "../components/homecomponents/FeedBack";
import Footer from "../components/Footer";
import DoctorcoursesVideo from "../components/doctorComponents/DoctorcoursesVideo";
import { useParams } from "react-router-dom";
import DoctorAPI from "../api/doctorAPI";
const Doctor = () => {
  const { id } = useParams();
  const [drDetailData, setDrDetailData] = useState();

  useEffect(() => {
    if (id) getDoctorData(id);
  }, []);
  const getDoctorData = async (id) => {
    const response = await DoctorAPI.getByDoctorId(id);
    if (response) {
      setDrDetailData(response);
    }
  };
  return (
    drDetailData && (
      <>
        <DoctorHero drDetailData={drDetailData} />
        <DoctorAbout drDetailData={drDetailData} />
        <DoctorcoursesVideo drDetailData={drDetailData} />
        <FeedBack drDetailData={drDetailData} />
        <Footer />
      </>
    )
  );
};

export default Doctor;
