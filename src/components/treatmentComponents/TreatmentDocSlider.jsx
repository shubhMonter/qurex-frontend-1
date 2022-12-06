import React from 'react';
import Slider from 'react-slick';
import { SlGraduation } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { BsFillStarFill, BsSearch } from 'react-icons/bs';
import loader from '../../assets/loader.gif';
import doctorApi from '../../api/doctorAPI';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment/moment';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { addData } from '../../state/doctor/Actions';

const TreatmentDocSlider = () => {

  const [allDoctorData, setAllDoctorData] = useState([]);
  const [showLoader,setShowLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const slug = (x) => {
    return x.replace(/ /g, '').toLowerCase();
  };
  
  const getAllDoctors = async() => {
  
    setShowLoader(true);
    
    // let response = await doctorApi.getAllDoctors();
    let response = await doctorApi.getHomeDoctors();
    console.log("all doctors..");
    console.log(response);
    if (response.length > 0) {
      setAllDoctorData(response);
    }
    setShowLoader(false);
  };
  // console.log(allDoctorData);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    getAllDoctors();    
  }, []);
  
  const doctorDetail = async (id) => {
    setShowLoader(true);
    let filterDr = allDoctorData.filter((item) => {
      return item._id === id;
    });
    let drDetailData = filterDr[0];
  
    if (drDetailData && Object.keys(drDetailData).length > 0) {
      let response = drDetailData;
      if (response && Object.keys(response).length > 0) {
        // console.log(response);
        dispatch(addData({ ...drDetailData, drUserData: response }));
        navigate('/doctor/' + slug(response?.userId.name));
      }
    } else {
    }
  
    setShowLoader(false);
  };

  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    // <div className="container-fluid">
    //   <Slider {...settings} className="my-5">

      <div className="container-fluid courseSection mt-10 mb-4">
      <div className="container">
        
        <div className="row">
          <div className="col">
            <h1 className="FeedBackTitle font-bold ml-4">Our Doctors</h1>
          </div>
          <div className="py-2 col text-end d-none d-md-block">
            <Link to={'/DoctorsList'}>
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill"
              >
                View All
              </button>
            </Link>
          </div>
        </div>

        {showLoader? 
        <div className="losup"><img className="block m-auto" src={loader}/></div>
         :
            <div className="row justify-content-center">

              {allDoctorData.slice(0, 3).map((item,index) => (
              
              <div className="col-12 col-md-4 col-sm-12 CourseContainer pb-2.5">
                <div className="card shadow border-0">
                  <img src={item?.userId?.profilePic} className="h-60 p-3"/>
                  <div className="card-body">
                      <div>
                        <span className="font-bold text-2xl"> {item?.userId?.name} </span>
                        <span>
                         {item?.education?.map((item, index) => (
                            <div className="inline"> {item?.degree},</div>
                          ))}
                        </span>
                        <p>
                        {item?.professionalDetail?.specializations?.map((item, index) => (
                            <div className="inline"> {item},</div>
                          ))}
                        </p>
                        <p><span className="font-bold text-[#0d6efd]">500+</span> Cases Solved</p>
                        <div className="separatorDocList">
                          <p><span className="font-semibold">Availability : </span> 
                          {item?.businessHours[moment().weekday()].slots?.map((item, index) => (
                            <div className="inline"> {item?.from} to {item?.to},</div>
                          ))}
                          </p>
                          <p><span className="line-through font-bold text-gray-400"> ₹ 1500</span><span className="line-through text-gray-400"> Cons Fees</span> <span className="font-bold"> | ₹ {item?.feeCharge}</span> <span className="qurexCust">For Qurex Customer</span></p>
                        </div>
                        <div className="separatorDocList">
                          <span 
                          onClick={() => doctorDetail(item?.userId._id)} 
                          className="cursor-pointer font-bold text-[#0d6efd]">View Details</span>
                          <Link to={item?.userId.name ? '/booking-calendar': '/login'}>
                            <button className="btn btn-primary featureViewBtn rounded-pill btnConsultList">Consult Now</button>
                          </Link>
                        </div>
                      </div>

                  </div>
                  </div>
                </div>
                ))}
        
            </div>
        }
      </div>
      </div>


    //   </Slider>
    // </div>
  );
};

export default TreatmentDocSlider;
