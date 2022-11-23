import React, { useEffect, useState } from 'react';
// import doc1 from '../../assets/doc1.png';
// import doc2 from '../../assets/doc2.png';
// import doc3 from '../../assets/doc3.png';
import doc1 from '../../assets/svgs/doc1.svg';
import doc2 from '../../assets/svgs/doc2.svg';
import doc3 from '../../assets/svgs/doc3.svg';
import star from '../../assets/star.png';
import hat from '../../assets/hat.png';
import globe from '../../assets/globe.png';
import cal from '../../assets/cal.png';
import doctorApi from '../../api/doctorAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from '../../state/doctor/Actions';
import '../../index.css';
import '../../styles/home.css';
const LandingOs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allDoctorData, setAllDoctorData] = useState([]);
  let rangeDoc1 = "cursor-pointer doc001";
  let rangeDoc2 = "doc002";
  let docImage = doc1;

  const getAllDoctors = async () => {
    let response = await doctorApi.getAllDoctors();
    console.log(response);
    if (response.length > 0) {
      setAllDoctorData(response);
    }
  };
  // console.log(allDoctorData);
  useEffect(() => {
    getAllDoctors();
  }, []);
  const slug = (x) => {
    return x.replace(/ /g, '').toLowerCase();
  };
  const doctorDetail = async (id) => {
    // console.log(id);
    let filterDr = allDoctorData.filter((item) => {
      return item._id === id;
    });
    let drDetailData = filterDr[0];

    if (drDetailData && Object.keys(drDetailData).length > 0) {
      let response = await doctorApi.getDrByUserId(drDetailData?.userId);
      if (response && Object.keys(response).length > 0) {
        // console.log(response);
        dispatch(addData({ ...drDetailData, drUserData: response }));
        navigate('/doctor/' + slug(response?.name));
      }
    } else {
    }

    //console.log(filterDr);
    // dispatch(addData(filterDr));
  };

  const sliderDocUpdate = async() => {
    let rangeVal = document.getElementById("customRange3").value;
    for(let i =0;i<document.getElementsByClassName("doc001").length; i++)
    {
      if(document.getElementsByClassName("doc001")[i].classList.contains(rangeDoc2))
      {
        document.getElementsByClassName("doc001")[i].classList.remove(rangeDoc2);
      }
    }
    document.getElementsByClassName("doc001")[rangeVal].classList.add(rangeDoc2);
  };

  return (
    <section className="los">
      <section className="inos">
        <div className="losup">
          <div className="lopupleft">
            <span className="losheading">Our Sexologist</span>
            <span className="lossubheading">
              Best sexual health experts from India & USA
            </span>
          </div>
          <div className="lopupright">
          <div className="py-2 col text-end d-none d-md-block">
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill"
          >
            View All
          </button>
        </div>
          </div>
        </div>
        <div className="container">
          <div className="losdown row">
            <div className="losdownleft col-md-6 col-lg-6 col-sm-6">
              {allDoctorData.slice(0, 3).map((item,index) => (
                <>
                  <img
                    className={index == 0 ? rangeDoc1 + " " + rangeDoc2 : rangeDoc1}
                    src={index == 0 ? doc1 : index == 1 ? doc2 : index == 2 ? doc3 : doc1}
                    alt=""
                    onClick={() => doctorDetail(item?._id)}
                  />
                </>
              ))}

              <input
                type="range"
                className="form-range"
                defaultValue="0"
                min="0"
                max="2"
                step="1"
                id="customRange3"
                onChange={() => sliderDocUpdate()}
              />
            </div>
            <div className="losdownright col-md-6 col-lg-6 col-sm-6">
              <div className="p-2">
                <span className="docName">Dr. Saravanan</span><span className="p-1.5">MBBS, MD (Psychiatry)</span>
                <div className="inldr">
                  <span className="pb-1.5 font-['Montserrat']">Psychiatry (Sexology)</span>
                  <p><span className="font-bold pr-1.5 text-[#0d6efd]">500+</span> Cases Solved</p>
                </div>
                <div className="inldr">
                  <p><span className="font-semibold">Availability : </span> 2 pm to 4 pm</p>
                  <p><span className="line-through font-bold text-gray-400"> ₹ 1500</span><span className="line-through text-gray-400"> Cons Fees</span> <span className="font-bold"> | ₹ 1200</span> <span className="qurexCust">For Qurex Customer</span></p>
                </div>
                <div className="inldr">
                  <span className="font-bold pr-1.5 text-[#0d6efd]">View Details</span>
                  <button className="osbtn btn btn-primary featureViewBtn rounded-pill btnConsult">Consult Now</button>
                </div>

                {/* <div className="grybox">
                  <span className="grybox1">
                    "Sexual health in India is commonly neglected and medical help
                    for intimacy and relationship issues is sought very late.
                  </span>

                  <span className="grybox2">Dr. Saravanan </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 pb-3 text-center col d-block d-md-none">
        <button type="button" className="btn btn-outline-primary rounded-pill">
        View All Doctors
        </button>
      </div>
      </section>
    </section>
  );
};

export default LandingOs;
