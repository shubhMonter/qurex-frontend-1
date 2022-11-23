import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import cardimage1 from '../../assets/pngs/cardImage1.png';
import cardImage2 from '../../assets/pngs/cardImage2.png';
import cardImage3 from '../../assets/pngs/cardImage3.png';
import mi1 from '../../assets/svgs/mi1.svg';
import mi2 from '../../assets/svgs/mi2.svg';
import mi3 from '../../assets/svgs/mi3.svg';
import mi4 from '../../assets/svgs/mi4.svg';
import fi1 from '../../assets/svgs/fi1.svg';
import fi2 from '../../assets/svgs/fi2.svg';
import fi3 from '../../assets/svgs/fi3.svg';
import ci1 from '../../assets/svgs/ci1.svg';
import ci2 from '../../assets/svgs/ci2.svg';
import '../../styles/home.css';
// import cardImage4 from "../../assets/pngs/cardImage4.png";

const Features = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 624,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid FeatureSection">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="featureTitle ms-5 ms-md-0">
                Sexual Issues we Treat
              </h1>
            </div>
            <div className="py-2 col text-end d-none d-md-block">
              <button
                type="button"
                className="btn btn-outline-primary featureViewBtn rounded-pill"
              >
                View All
              </button>
            </div>
          </div>

          <ul
            className="mx-4 my-3 nav nav-pills my-md-5"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active "
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                His
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Her
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Couples
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <Slider {...settings} className="mb-5">

                {/* Male tab */}
                <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={mi1}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">Erectile Dysfunction</h3>
                      <p className="featureCardText">
                        It is defined by difficulty getting and keeping an
                        erection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={mi2}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">Low Sex Drive</h3>
                      <p className="featureCardText">
                        People with hypogonadism may have low sex drives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={mi3}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">
                        Premature Ejaculation
                      </h3>
                      <p className="featureCardText">
                        It is defined by difficulty getting and keeping an
                        erection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={mi4}
                      className="card-img-top featureCardImage"
                    /> 
                    <div className="card-body">
                      <h3 className="featureCardTitle">Male Infertility</h3>
                      <p className="featureCardText">
                        A man is not able to start a pregnancy with his female
                        partner.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <Slider {...settings} className="mb-5">
              {/* Female tab */}
              <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={fi1}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">Painful Sex</h3>
                      <p className="featureCardText">
                        It is defined by difficulty getting and keeping an
                        erection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={fi2}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">Low Sex Drive</h3>
                      <p className="featureCardText">
                        People with hypogonadism may have low sex drives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={fi3}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">No Orgasm</h3>
                      <p className="featureCardText">
                        It is defined by difficulty getting and keeping an
                        erection.
                      </p>
                    </div>
                  </div>
                </div>

                </Slider>
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <Slider {...settings} className="mb-5">
              {/* Couples tab */}
              <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={ci1}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">Painful Sex</h3>
                      <p className="featureCardText">
                      Sexless Relationship
                      </p>
                    </div>
                  </div>
                </div>

                <div className="CardContainer featureCard">
                  <div className="card">
                    <img
                      src={ci2}
                      className="card-img-top featureCardImage"
                    />
                    <div className="card-body">
                      <h3 className="featureCardTitle">Low Sex Drive</h3>
                      <p className="featureCardText">
                        Sexless Issue
                      </p>
                    </div>
                  </div>
                </div>

                </Slider>
            </div>
          </div>
          {/* <div className="mb-5 text-center d-block d-md-none">
            <button
              type="button"
              className="btn btn-outline-primary featureViewBtn rounded-pill "
            >
              View All
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Features;
