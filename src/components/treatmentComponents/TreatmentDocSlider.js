import React from 'react';
import Slider from 'react-slick';
import { CgProfile } from 'react-icons/cg';
import { SlGraduation } from 'react-icons/sl';
// import TreatmentDoctorCard1 from '../../assets/pngs/TreatmentDoctorCard1.png'
// import TreatmentDoctorCard2 from '../../assets/pngs/TreatmentDoctorCard2.png'

const TreatmentDocSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <Slider {...settings} className="my-5">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div>
                  <div className="mx-2">
                    <div className="p-3 rounded ">
                      <button className="btn btn-primary rounded-pill btn-sm">
                        Gynecologist
                      </button>
                      <div className="mt-2 rounded d-flex doctorMoreSection">
                        {/* <img src={TreatmentDoctorCard2} /> */}
                        <div className="pt-1 ps-3 ">
                          <h3>Dr. Uma Devi</h3>
                          <p>
                            <span className="me-1">
                              <SlGraduation size={20} />
                            </span>
                            MBBS, MD (Psychiatry)
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 fs-6">
                        Specialised in{' '}
                        <span className="fw-bolder">
                          Sexual & Relationship Psychotherapy
                        </span>
                      </p>
                      <p>
                        Consults done : <span className="fw-bolder">20243</span>
                      </p>
                      <p>
                        Experience : <span className="fw-bolder">8+ Years</span>
                      </p>
                      <button className="px-2 border rounded lh-sm border-light bg-light">
                        <p>Consulting Fee</p>
                        <p className="fw-bolder">₹ 399</p>
                      </button>
                      <div className="mt-4 d-flex justify-content-between">
                        <p>View Profile</p>
                        <button className="px-3 btn btn-outline-primary btn-sm rounded-pill">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div>
                  <div className="mx-2">
                    <div className="p-3 rounded ">
                      <button className="btn btn-primary rounded-pill btn-sm">
                        Gynecologist
                      </button>
                      <div className="mt-2 rounded d-flex doctorMoreSection">
                        {/* <img src={TreatmentDoctorCard1} className="TreatmentDoctorImage"/> */}

                        <div className="pt-1 ps-3 ">
                          <h3>Dr. Uma Devi</h3>
                          <p>
                            <span className="me-1">
                              <SlGraduation size={20} />
                            </span>
                            MBBS, MD (Psychiatry)
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 fs-6">
                        Specialised in{' '}
                        <span className="fw-bolder">
                          Sexual & Relationship Psychotherapy
                        </span>
                      </p>
                      <p>
                        Consults done : <span className="fw-bolder">20243</span>
                      </p>
                      <p>
                        Experience : <span className="fw-bolder">8+ Years</span>
                      </p>
                      <button className="px-2 border rounded lh-sm border-light bg-light">
                        <p>Consulting Fee</p>
                        <p className="fw-bolder">₹ 399</p>
                      </button>
                      <div className="mt-4 d-flex justify-content-between">
                        <p>View Profile</p>
                        <button className="px-3 btn btn-outline-primary btn-sm rounded-pill">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div>
                  <div className="mx-2">
                    <div className="p-3 rounded ">
                      <button className="btn btn-primary rounded-pill btn-sm">
                        Gynecologist
                      </button>
                      <div className="mt-2 rounded d-flex doctorMoreSection">
                        {/* <img src={TreatmentDoctorCard2} className="TreatmentDoctorImage"/> */}
                        <div className="pt-1 ps-3 ">
                          <h3>Dr. Uma Devi</h3>
                          <p>
                            <span className="me-1">
                              <SlGraduation size={20} />
                            </span>
                            MBBS, MD (Psychiatry)
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 fs-6">
                        Specialised in{' '}
                        <span className="fw-bolder">
                          Sexual & Relationship Psychotherapy
                        </span>
                      </p>
                      <p>
                        Consults done : <span className="fw-bolder">20243</span>
                      </p>
                      <p>
                        Experience : <span className="fw-bolder">8+ Years</span>
                      </p>
                      <button className="px-2 border rounded lh-sm border-light bg-light">
                        <p>Consulting Fee</p>
                        <p className="fw-bolder">₹ 399</p>
                      </button>
                      <div className="mt-4 d-flex justify-content-between">
                        <p>View Profile</p>
                        <button className="px-3 btn btn-outline-primary btn-sm rounded-pill">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div>
                  <div className="mx-2">
                    <div className="p-3 rounded ">
                      <button className="btn btn-primary rounded-pill btn-sm">
                        Gynecologist
                      </button>
                      <div className="mt-2 rounded d-flex doctorMoreSection">
                        {/* <img
                          src={TreatmentDoctorCard1}
                          className="TreatmentDoctorImage"
                        /> */}
                        <div className="pt-1 ps-3 ">
                          <h3>Dr. Uma Devi</h3>
                          <p>
                            <span className="me-1">
                              <SlGraduation size={20} />
                            </span>
                            MBBS, MD (Psychiatry)
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 fs-6">
                        Specialised in{' '}
                        <span className="fw-bolder">
                          Sexual & Relationship Psychotherapy
                        </span>
                      </p>
                      <p>
                        Consults done : <span className="fw-bolder">20243</span>
                      </p>
                      <p>
                        Experience : <span className="fw-bolder">8+ Years</span>
                      </p>
                      <button className="px-2 border rounded lh-sm border-light bg-light">
                        <p>Consulting Fee</p>
                        <p className="fw-bolder">₹ 399</p>
                      </button>
                      <div className="mt-4 d-flex justify-content-between">
                        <p>View Profile</p>
                        <button className="px-3 btn btn-outline-primary btn-sm rounded-pill">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TreatmentDocSlider;
