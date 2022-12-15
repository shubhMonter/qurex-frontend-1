import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import loader from '../assets/loader.gif';
import doctorApi from '../api/doctorAPI';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment/moment';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { addData } from '../state/doctor/Actions';


const DoctorsList = () => {

  const [allDoctorData, setAllDoctorData] = useState([]);
  const [newDocs, setNewDocs] = useState([]);
  const [allTreatments, setAllTreatments] = useState([]);
  const [showLoader,setShowLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQ,setSearchQ] = useState("");
  const [searchQTreatment,setSearchQTreatment] = useState("");
  const slug = (x) => {
    return x.replace(/ /g, '').toLowerCase();
  };
  
  const getAllDoctors = async() => {
  
    setShowLoader(true);
    
    // let response1 = await doctorApi.getAllDoctors();
    let response = await doctorApi.getHomeDoctors();
    console.log("all doctors..");
    console.log(response);
    // console.log(response1);
    if (response.length > 0) {
      setAllDoctorData(response);
      setNewDocs(response);
    }
    getAllTreatments();
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
        dispatch(addData({ ...drDetailData, drUserData: response }));
        navigate('/doctor/' + slug(response?.userId.name));
      }
    } else {
    }
  
    setShowLoader(false);
  };

  const getAllTreatments = () => {
    // let allTreatments = allDoctorData.map(item => {
    //   return item.professionalDetail.treatments.map(currTreatment => {
    //     return currTreatment;
    //   });
    // });
    let allTreatments = allDoctorData.map(item => {
      return item.professionalDetail.specializations.map(currTreatment => {
        return currTreatment;
      });
    });
    console.log("allTreatments");
    console.log(allTreatments);
    setAllTreatments(allTreatments);
  }

  const searchDocData = () =>
  {
    console.log("searchQ");
    console.log(searchQ);
    let newDocs = allDoctorData.filter((item) => {
      console.log(item.userId.name);
      return item.userId.name.includes(searchQ);
    });
    setNewDocs(newDocs);
  }

  const treatmentDocData = (optionVal) =>
  {
    setSearchQTreatment(optionVal);
    console.log("searchQTreatment");
    console.log(searchQTreatment);
    let newDocs = allDoctorData.filter((item) => {
      console.log(item.professionalDetail.specializations);
      return searchQTreatment in item.professionalDetail.specializations;
    });
    setNewDocs(newDocs);
  }



  return (

    <div className="container-fluid courseSection">
      <div className="container">
        <div className="row pb-1">
          <div className="col">
            <h1 className="font-bold mt-5 text-center">Choose your Doctor for Online Consulting</h1>
          </div>
        </div>
        <div className="row p-2.5">
          <div className="col">
          <InputGroup className="mb-3 p-2.5 w-9/12 m-auto ">
            <Form.Control className="shadow h-10"
              placeholder="Search for Doctor, specialist"
              aria-label="Search-Box"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" 
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              className="shadow h-10">
              <BsSearch onClick={searchDocData} color="gray" />
            </InputGroup.Text>
          </InputGroup>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="float-left font-bold mt-3">All Specialist</span>
            <span className="float-right">
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Select Gender"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Male</Dropdown.Item>
                <Dropdown.Item href="#">Female</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                variant="outline-secondary"
                title="Select Treatment"
                id="input-group-dropdown-1"
                onChange={(e) => treatmentDocData(e.value)}
                value={searchQTreatment}
              >
                {allTreatments.map((treatmentVal) => (
                  <Dropdown.Item href="#">{treatmentVal}</Dropdown.Item>
                ))}
              </DropdownButton>
            </InputGroup>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <hr className="p-0.5"/>
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
  );
};

export default DoctorsList;