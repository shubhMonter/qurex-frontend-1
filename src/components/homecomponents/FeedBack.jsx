import React from 'react';
import Slider from 'react-slick';
import feedback1 from '../../assets/pngs/feedback1.png';
import doubleQuotes from '../../assets/svgs/doubleQuotes.svg';

const FeedBack = () => {
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="container FeedBackContainer">
      <div className="row">
        <div className="col">
          <h1 className="FeedBackTitle font-bold ml-4">Patient’s Feedback</h1>
        </div>
        <div className="py-2 col text-end d-none d-md-block">
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill"
          >
            View All
          </button>
        </div>
      </div>

      <Slider {...settings} className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="feedBackCircle">
                {/* <img src={feedbackQuote}/> */}
                {/* <img className="quoteImage" src={globe}/> */}
                <img className="quoteImage" src={doubleQuotes}/>
              </div>
              <div className="feedbackContainer w-520">
                <p className="feedBackTitle p-1.5 pl-5">Very helpful.</p>
                <p className="feedBackParagraph p-1.5 pl-5 font-['Montserrat'] w-9/12 text-base">
                  Far easier than doing same things on computer. Allows quick
                  and easy search with speedy booking. Even maintains history of
                  doctors visited
                </p>
                <div className="mx-3 dividerContianer">
                  <hr />
                </div>
                <div className="d-flex ms-3 PatientData">
                  <div className="feedbackPaitentImage">
                    <img className="mx-auto rounded-circle" src={feedback1} />
                  </div>
                  <div>
                    <p className="feedbackPaitentName">Indhuja</p>
                    <p className="feedbackPatientLocation">Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-12">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="feedBackCircle">
                {/* <img src={feedbackQuote}/> */}
                {/* <img className="quoteImage" src={globe}/> */}
                <img className="quoteImage" src={doubleQuotes}/>
              </div>
              <div className="feedbackContainer w-520">
                <p className="feedBackTitle p-1.5 pl-5">Very helpful.</p>
                <p className="feedBackParagraph p-1.5 pl-5 font-['Montserrat'] w-9/12 text-base">
                  Far easier than doing same things on computer. Allows quick
                  and easy search with speedy booking. Even maintains history of
                  doctors visited
                </p>
                <div className="mx-3 dividerContianer">
                  <hr />
                </div>
                <div className="d-flex ms-3 PatientData">
                  <div className="feedbackPaitentImage">
                    <img className="mx-auto rounded-circle" src={feedback1} />
                  </div>
                  <div>
                    <p className="feedbackPaitentName">Indhuja</p>
                    <p className="feedbackPatientLocation">Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="feedBackCircle">
                {/* <img src={feedbackQuote}/> */}
                {/* <img className="quoteImage" src={globe}/> */}
                <img className="quoteImage" src={doubleQuotes}/>
              </div>
              <div className="feedbackContainer w-520">
                <p className="feedBackTitle p-1.5 pl-5">Very helpful.</p>
                <p className="feedBackParagraph p-1.5 pl-5 font-['Montserrat'] w-9/12 text-base">
                  Far easier than doing same things on computer. Allows quick
                  and easy search with speedy booking. Even maintains history of
                  doctors visited
                </p>
                <div className="mx-3 dividerContianer">
                  <hr />
                </div>
                <div className="d-flex ms-3 PatientData">
                  <div className="feedbackPaitentImage">
                    <img className="mx-auto rounded-circle" src={feedback1} />
                  </div>
                  <div>
                    <p className="feedbackPaitentName">Indhuja</p>
                    <p className="feedbackPatientLocation">Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="py-2 pb-3 text-center col d-block d-md-none">
        <button type="button" className="btn btn-outline-primary rounded-pill">
          View All
        </button>
      </div>
    </div>
  );
};

export default FeedBack;
