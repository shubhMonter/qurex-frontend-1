import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import loader from "../assets/loader.gif";
import doctorApi from "../api/doctorAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { addData } from "../state/doctor/Actions";

const DoctorsList = () => {
  const [allDoctorData, setAllDoctorData] = useState([]);
  const [newDocs, setNewDocs] = useState([]);
  const [allTreatments, setAllTreatments] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQ, setSearchQ] = useState("");
  const [searchQTreatment, setSearchQTreatment] = useState("");
  const slug = (x) => {
    return x.replace(/ /g, "").toLowerCase();
  };

  const getAllDoctors = async () => {
    setShowLoader(true);

    let response1 = await doctorApi.getAllDoctors();
    let response = response1.filter((item) => {
      return item.userId != null;
    });
    // let response = await doctorApi.getHomeDoctors();
    console.log("all doctors..");
    console.log(response);
    // console.log(response1);
    if (response.length > 0) {
      setAllDoctorData(response);
      setNewDocs(response);
    }
    getAllTreatments(response);
    setShowLoader(false);
  };
  // console.log(allDoctorData);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

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
        navigate("/doctor/" + slug(response?.userId.name));
      }
    } else {
    }

    setShowLoader(false);
  };

  const getAllTreatments = (allDocs) => {
    // let totalTreatments = allDocs.reduce(
    //   (prevValue, currentValue) => prevValue + currentValue.professionalDetail.treatments.reduce((preVal,currVal) => preVal + currVal + ","),
    //   ","
    // );
    // console.log(totalTreatments);
    let allTreatments = allDocs.map((item) => {
      return item.professionalDetail.treatments.map((currTreatment, index) => {
        if (index < 1) {
          return currTreatment;
        }
      });
    });
    // console.log("allTreatments");
    // console.log(allTreatments);
    setAllTreatments(allTreatments);
  };

  const searchDocData = () => {
    let searchVal = document.querySelector(".searchName").value;
    console.log("searchQ");
    console.log(searchVal);
    setSearchQ(searchVal);
    console.log(searchQ);
    let newDocs = allDoctorData;
    if (searchVal != "") {
      newDocs = allDoctorData.filter((item) => {
        console.log(item.userId.name);
        return item.userId.name.indexOf(searchVal) > -1;
      });
    }
    setNewDocs(newDocs);
  };

  const treatmentDocData = async (optionVal) => {
    document.getElementById("input-group-dropdown-2").textContent = optionVal;
    setSearchQTreatment(optionVal);
    console.log("searchQTreatment");
    console.log(optionVal);
    console.log(searchQTreatment);
    let newDocs = allDoctorData;
    if (optionVal != "All") {
      newDocs = allDoctorData.filter((item) => {
        // console.log(item.professionalDetail.treatments);
        // return item.professionalDetail.treatments.includes(optionVal);
        return item.professionalDetail.treatments.includes(optionVal);
      });
    }
    setNewDocs(newDocs);
  };

  const genderDocData = async (optionVal) => {
    document.getElementById("input-group-dropdown-1").textContent = optionVal;
    console.log(optionVal);
    let newDocs = allDoctorData;
    if (optionVal != "Both") {
      newDocs = allDoctorData.filter((item) => {
        console.log(item.professionalDetail.treatments);
        return searchQTreatment in item.professionalDetail.treatments;
      });
    }
    setNewDocs(newDocs);
  };

  return (
    <div className="container-fluid courseSection">
      <div className="container">
        <div className="row pb-1">
          <div className="col">
            <h1 className="font-bold mt-5 text-center">
              Choose your Doctor for Online Consulting
            </h1>
          </div>
        </div>
        <div className="row p-2.5">
          <div className="col">
            <InputGroup className="mb-3 p-2.5 w-9/12 m-auto ">
              <Form.Control
                className="shadow h-10 searchName"
                placeholder="Search for Doctor"
                aria-label="Search-Box"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
                className="shadow h-10 cursor-pointer"
              >
                <BsSearch onClick={searchDocData} color="gray cursor-pointer" />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="float-left font-bold mt-3">All Specialist</span>
            <span className="float-right">
              <InputGroup className="mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    title="Select Gender"
                    id="input-group-dropdown-1"
                  >
                    Select Gender
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as="button"
                      onClick={() => genderDocData("Male")}
                      href="#"
                    >
                      Male
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      onClick={() => genderDocData("Female")}
                      href="#"
                    >
                      Female
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      onClick={() => genderDocData("Both")}
                      href="#"
                    >
                      Both
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    title="Select Gender"
                    id="input-group-dropdown-2"
                  >
                    Select Treatment
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as="button"
                      onClick={() => treatmentDocData("All")}
                      href="#"
                    >
                      All
                    </Dropdown.Item>
                    {allTreatments.map((treatmentVal) => (
                      <Dropdown.Item
                        as="button"
                        onClick={() => treatmentDocData(treatmentVal)}
                        href="#"
                      >
                        {treatmentVal}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="p-0.5" />
          </div>
        </div>

        {showLoader ? (
          <div className="losup">
            <img className="block m-auto" src={loader} />
          </div>
        ) : (
          <div className="row justify-content-center">
            {newDocs.map((item, index) => (
              <div className="col-12 col-md-4 col-sm-12 CourseContainer pb-2.5">
                <div className="card shadow border-0">
                  <img src={item?.userId?.profilePic} className="h-60 p-3" />
                  <div className="card-body">
                    <div>
                      <span className="font-bold text-2xl">
                        {" "}
                        {item?.userId?.name}{" "}
                      </span>
                      <span>
                        {item?.education?.map((item, index) => (
                          <div className="inline"> {item?.degree},</div>
                        ))}
                      </span>
                      <p>
                        {item?.professionalDetail?.specializations?.map(
                          (item, index) => (
                            <div className="inline"> {item},</div>
                          )
                        )}
                      </p>
                      <p>
                        <span className="font-bold text-[#0d6efd]">500+</span>{" "}
                        Cases Solved
                      </p>
                      <div className="separatorDocList">
                        <p>
                          <span className="font-semibold">Availability : </span>
                          {item?.businessHours[moment().weekday()].slots?.map(
                            (item, index) => (
                              <div className="inline">
                                {" "}
                                {item?.from} to {item?.to},
                              </div>
                            )
                          )}
                        </p>
                        <p>
                          <span className="line-through font-bold text-gray-400">
                            {" "}
                            ₹ 1500
                          </span>
                          <span className="line-through text-gray-400">
                            {" "}
                            Cons Fees
                          </span>{" "}
                          <span className="font-bold">
                            {" "}
                            | ₹ {item?.feeCharge}
                          </span>{" "}
                          <span className="qurexCust">For Qurex Customer</span>
                        </p>
                      </div>
                      <div className="separatorDocList">
                        <span
                          onClick={() => doctorDetail(item?.userId._id)}
                          className="cursor-pointer font-bold text-[#0d6efd]"
                        >
                          View Details
                        </span>
                        <Link
                          to={
                            item?.userId?.name
                              ? "/booking-calendar/" + item.userId._id
                              : "/login"
                          }
                        >
                          <button className="btn btn-primary featureViewBtn rounded-pill btnConsultList">
                            Consult Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
