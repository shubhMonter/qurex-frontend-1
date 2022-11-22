import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';

const Features = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="container-fluid faqSection">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Sexual Issues we Treat</h1>
          </div>
          <div className="col text-end py-2">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill"
            >
              View All
            </button>
          </div>
        </div>
        <Tabs variant="pills" defaultActiveKey="male" className="my-5 mx-4">
          <Tab eventKey="male" title="Male">
            <Slider {...settings} className="mb-5">
              <div className="m-1 m-lg-3">
                <div className="card m-1 m-lg-3">
                  <div className="card-body">
                    <h5 className="card-title">What is sexology?</h5>

                    <p className="card-text mb-5">
                      Our experience in deploying healthcare chabots give us an
                      edge in understanding industry specific challenges.
                    </p>
                    <div className="text-end">
                      <button className="border rounded-circle border-dark">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-1 m-lg-3">
                <div className="card m-1 m-lg-3">
                  <div className="card-body">
                    <h5 className="card-title">What is sexology?</h5>

                    <p className="card-text mb-5">
                      Our experience in deploying healthcare chabots give us an
                      edge in understanding industry specific challenges.
                    </p>
                    <div className="text-end">
                      <button className="border rounded-circle border-dark">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-1 m-lg-3">
                <div className="card m-1 m-lg-3">
                  <div className="card-body">
                    <h5 className="card-title">What is sexology?</h5>

                    <p className="card-text mb-5">
                      Our experience in deploying healthcare chabots give us an
                      edge in understanding industry specific challenges.
                    </p>
                    <div className="text-end">
                      <button className="border rounded-circle border-dark">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-1 m-lg-3">
                <div className="card m-1 m-lg-3">
                  <div className="card-body">
                    <h5 className="card-title">What is sexology?</h5>

                    <p className="card-text mb-5">
                      Our experience in deploying healthcare chabots give us an
                      edge in understanding industry specific challenges.
                    </p>
                    <div className="text-end">
                      <button className="border rounded-circle border-dark">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-1 m-lg-3">
                <div className="card m-1 m-lg-3">
                  <div className="card-body">
                    <h5 className="card-title">What is sexology?</h5>

                    <p className="card-text mb-5">
                      Our experience in deploying healthcare chabots give us an
                      edge in understanding industry specific challenges.
                    </p>
                    <div className="text-end">
                      <button className="border rounded-circle border-dark">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </Tab>
          <Tab eventKey="female" title="Female">
            Female
          </Tab>
          <Tab eventKey="couples" title="Couples">
            Couples
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Features;
