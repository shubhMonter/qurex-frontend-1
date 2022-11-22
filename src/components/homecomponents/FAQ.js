import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import faqCardLine from '../../assets/svgs/faqCardLine.svg';
import faqCardClose from '../../assets/svgs/faqCardClose.svg';
import faqCardAdd from '../../assets/svgs/faqCardAdd.svg';
import '../../styles/home.css';

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
    <div className="mb-5 container-fluid faqSection">
      <div className="mb-5 container container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="faqTitle">Frequently Asked Questions</h1>
          </div>
        </div>
        <Tabs variant="pills" defaultActiveKey="male" className="mx-4 my-5">
          <Tab eventKey="male" title="Male">
          <Slider {...settings} className="mb-5 btmSpace">

              <div className="FaqCardContainer">
                <div className="mx-auto rounded FAQContainer">
                
                    <div className="flip-box-front">
                      <img src={faqCardLine} className="faqCardDash" />
                      <h2>What is sexology?</h2>
                    </div>
                    <div className="flip-box-back">
                      <img src={faqCardLine} className="faqCardDash" />
                        <h4>What is sexology?</h4>
                        Our experience in deploying healthcare chabots give us an
                        edge in understanding industry specific challenges.
                    </div>

                </div>
              </div>

              <div className="FaqCardContainer">
                <div className="mx-auto rounded FAQContainer">

                <div className="flip-box-front">
                  <img src={faqCardLine} className="faqCardDash" />
                  <h2>Can I give my baby fruit and vegetables during weaning?</h2>
                </div>
                <div className="flip-box-back">
                  <img src={faqCardLine} className="faqCardDash" />
                  <h4>Can I give my baby fruit and vegetables during weaning?</h4>
                  Our experience in deploying healthcare chabots give us.
                </div>

                </div>
              </div>

              <div className="FaqCardContainer">
                <div className="mx-auto rounded FAQContainer">

                  <div className="flip-box-front">
                    <img src={faqCardLine} className="faqCardDash" />
                    <h2>Do potatoes count as one of my 5 A Day?</h2>
                  </div>
                  <div className="flip-box-back">
                    <img src={faqCardLine} className="faqCardDash" />
                    <h4>Do potatoes count as one of my 5 A Day?</h4>
                    Our experience in deploying healthcare chabots give us.
                  </div>
              
                </div>
              </div>

              <div className="FaqCardContainer">
                <div className="mx-auto rounded FAQContainer">
                  

                  <div className="flip-box-front">
                    <img src={faqCardLine} className="faqCardDash" />
                    <h2>Can I just eat five portions of my favourite fruit or vegetable?</h2>
                  </div>
                  <div className="flip-box-back">
                    <img src={faqCardLine} className="faqCardDash" />
                    <h4>Can I just eat five portions of my favourite fruit or vegetable?</h4>
                    Our experience in deploying healthcare chabots give us.
                  </div>

                </div>
              </div>

              <div className="FaqCardContainer">
                <div className="mx-auto rounded FAQContainer">
                
                <div className="flip-box-front">
                      <img src={faqCardLine} className="faqCardDash" />
                      <h2>What is sexology?</h2>
                    </div>
                    <div className="flip-box-back">
                      <img src={faqCardLine} className="faqCardDash" />
                        <h4>What is sexology?</h4>
                        Our experience in deploying healthcare chabots give us an
                        edge in understanding industry specific challenges.
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
