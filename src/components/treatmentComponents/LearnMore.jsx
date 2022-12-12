import React from "react";
import Slider from "react-slick";
import learnMore1 from '../../assets/svgs/learnMore1.svg';
import learnMore2 from '../../assets/svgs/learnMore2.svg';
import arrowRight from '../../assets/svgs/arrowRight.svg';

const LearnMore = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
          initialSlide: 2,
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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="TreatmentLearnMore font-bold">Learn more about your condition</h1>
        </div>
        <div className="col text-end py-2">
          
        </div>
      </div>

      <Slider {...settings} className="my-5">
        <div className=" container">
          <div className="row">
            <div className="col-12 ">
            <div className="card bg-slate-400 shadow">
                <img
                  className="w-10 m-7 ml-16"
                  src={learnMore1}
                  width={"80px"}
                />
                <h3 className="px-1 ms-3 px-lg-5 TreatmentCardTitle font-bold">Causes</h3>
                <p className="px-1  ms-3 px-lg-5 mb-5 mt-3 TreatmentCardParagraph">
                  Health conditions such as peripheral artery disease,
                  atherosclerosis, diabetes, hypertension, obesity, etc, can
                  cause reduced blood flow to the penis due to artery narrowing.
                  Furthermore, injury to the spinal cord or radiation therapy
                  can disrupt or harm nerves present in the penis.{" "}<br/><br/>
                </p>
                <div className="d-flex">
                <p className="px-1 d-flex px-lg-5 mb-5 ms-3">
                    Learn More <span className="p-1 ml-1"><img src={arrowRight} /></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container">
          <div className="row">
            <div className="col-12 ">
              <div className="card bg-slate-400 shadow-sm">
                <img
                  className="w-10 m-7 ml-16"
                  src={learnMore2}
                  width={"80px"}
                />
                <h3 className="px-1 ms-3 px-lg-5 TreatmentCardTitle font-bold">Symptoms</h3>
                <div className="fs-6 ms-3 px-1 px-lg-5 fw-light TreatmentCardParagraph">
                  <p>The symptoms of erectile dysfunction include:</p>
                  <ul>
                    <li>Difficulty in getting an erection</li>
                    <li>Difficulty in maintaining an erection</li>
                    <li>
                      Getting a partial erection, not firm/hard enough for
                      vaginal penetration
                    </li>
                    <li>Reduced libido or sexual desire</li>
                    <li>Increased anxiety and stress associated with </li>
                  </ul>
                </div>
                <div className="d-flex">
                  <p className="px-1 d-flex px-lg-5 mb-5 ms-3">
                    Learn More <span className="p-1 ml-1"><img src={arrowRight} /></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className=" container">
          <div className="row">
            <div className="col-12 ">
              <div className="card bg-slate-400 shadow-sm">
                <img
                  className="w-10 m-7 ml-16"
                  src={learnMore1}
                  width={"80px"}
                />
                <h3 className="px-1 ms-3 px-lg-5 TreatmentCardTitle font-bold">Causes</h3>
                <p className="px-1  ms-3 px-lg-5 mb-5 mt-3 TreatmentCardParagraph">
                  Health conditions such as peripheral artery disease,
                  atherosclerosis, diabetes, hypertension, obesity, etc, can
                  cause reduced blood flow to the penis due to artery narrowing.
                  Furthermore, injury to the spinal cord or radiation therapy
                  can disrupt or harm nerves present in the penis.{" "}<br/><br/>
                </p>
                <div className="d-flex">
                <p className="px-1 d-flex px-lg-5 mb-5 ms-3">
                    Learn More <span className="p-1 ml-1"><img src={arrowRight} /></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default LearnMore;
