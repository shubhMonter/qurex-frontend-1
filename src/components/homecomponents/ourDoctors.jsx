import React, { useEffect, useState } from 'react';
import loader from '../../assets/loader.gif';
import doctorApi from '../../api/doctorAPI';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../index.css';
import '../../styles/home.css';
const OurDoctors = () => {
  const [allDoctorData, setAllDoctorData] = useState([]);
  const [selectedDoc,setSelectedDoc] = useState({});
  const [showLoader,setShowLoader] = useState(false);
  let rangeDoc1 = "cursor-pointer doc001";
  let rangeDoc2 = "doc002";
  const auth = useSelector((state) => state.auth.authData);
  const getAllDoctors = async() => {
    try {
        setShowLoader(true);
        let response = await doctorApi.getHomeDoctors();
        if (response.length > 0) {
          setAllDoctorData(response);
          setSelectedDoc(response[0]);
        }
    setShowLoader(false);
    } catch (error) {
      console.log(error);
    }

  };
 
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    getAllDoctors();    
  }, []);

  const sliderDocUpdate = async() => {
    let rangeVal = document.getElementById("customRange3").value;
    let responseDoc = allDoctorData[rangeVal];
    setSelectedDoc(responseDoc);
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
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
        {showLoader? 
        <div className="losup"><img className="block m-auto" src={loader}/></div>
         :
        <div>
        <div className="losup">
          <div className="lopupleft">
            <span className="losheading ml-5">Our Sexologist</span>
            <span className="lossubheading ml-5 block pb-2.5">
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
              {allDoctorData.slice(0, 3).map((item,index) =>

                (
                <Link to={'/doctor/'+ item?.userId._id}>
                  <img
                    className={index == 0 ? rangeDoc1 + " " + rangeDoc2 : rangeDoc1}
                    src={item?.userId?.profilePic}
                    alt=""
                  />
                </Link>
              ))}

              <input
                type="range"
                className="form-range pb-2.5"
                defaultValue="0"
                min="0"
                max={allDoctorData.slice(0, 3).length -1}
                step="1"
                id="customRange3"
                onChange={() => sliderDocUpdate()}
              />
            </div>
            <div className="losdownright col-md-6 col-lg-6 col-sm-6">
              <div className="p-2">
                <span className="docName"> {selectedDoc?.userId?.name} </span>
                {selectedDoc?.education && selectedDoc?.education.length > 0 && selectedDoc?.education.map(x=> <span className="p-1.5">{x.degree}</span>)}
                
                <div className="inldr">
                  <span className="pb-2 font-['Montserrat']">{selectedDoc?.experience?.length > 0 && selectedDoc?.experience[0]?.designation}</span>
                  <p><span className="pb-1.5 font-bold pr-1.5 text-[#0d6efd]">15+ Years experience</span></p>
                  <p><span className="pb-1.5 font-bold pr-1.5 text-[#0d6efd]">500+</span> Cases Solved</p>
                </div>
                <div className="inldr">
                  <p><span className="font-semibold">Availability : </span> {selectedDoc?.bussinessHours?.length > 0 && selectedDoc?.bussinessHours.map(x=>{
                    if(x.day === new Date().getDay().toString()){
                        return (<>{x.slots[0].from - x.slots[x.slots.length-1].to}</>)
                    }
                  })}  </p>
                  <p><span className="line-through font-bold text-gray-400"> ₹ 1500</span><span className="line-through text-gray-400"> Cons Fees</span> <span className="font-bold"> | ₹ {selectedDoc?.feeCharge}</span> <span className="qurexCust">For Qurex Customer</span></p>
                </div>
                <div className="inldr">
                <Link to={`/doctor/${selectedDoc?.userId?._id}`}> 
                  <span 
                  className="cursor-pointer font-bold pr-1.5 text-[#0d6efd]">View Details</span>
                 </Link> 
                  <Link to={auth.isAuthenticated? '/booking-calendar/'+ selectedDoc?.userId?._id: '/login'}><button className="osbtn btn btn-primary featureViewBtn rounded-pill btnConsult">Consult Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 pb-3 text-center col d-block d-md-none">
        <button type="button" className="btn btn-outline-primary rounded-pill">
        View All Doctors
        </button>
      </div>
      </div>
      }
      </div>
      </div>
      </div>
      </section>
    </section>
              
  );
};

export default OurDoctors;
