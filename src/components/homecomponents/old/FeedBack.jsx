import React from "react";
import Slider from "react-slick";
import {CgProfile} from 'react-icons/cg'
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
        <div className="col">
          <h1>Patient’s Feedback</h1>
        </div>
        <div className="col text-end py-2"><button type="button" className="btn btn-outline-primary rounded-pill">View All</button></div>
      </div>

      <Slider {...settings} className="my-5">
      <div className=" container">
        <div className="row"> 
        <div className="col-12">
            <div className="card">
            <h3 className="px-1 px-lg-5 mt-4">Very Helpful.</h3>
            <p className="px-1 px-lg-5 mb-5">Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited</p>
            <hr />
            <div className="d-flex mx-2">
            <img src=".." className="rounded-circle" alt=""/>
            <CgProfile size="60"/>
            <div> <h4>Indhuja</h4>
            <p>Chennai</p>
            </div>
            </div>
            </div>
        </div>
        
        </div>
      </div>    
      <div className=" container">
        <div className="row"> 
        <div className="col-12">
            <div className="card">
            <h3 className="px-1 px-lg-5 mt-4">Very Helpful.</h3>
            <p className="px-1 px-lg-5 mb-5">Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited</p>
            <hr />
            <div className="d-flex mx-2">
            <CgProfile size="60"/>
            <div> <h4>Indhuja</h4>
            <p>Chennai</p>
            </div>
            </div>
            </div>
        </div>
        
        </div>
      </div>  


      <div className=" container">
        <div className="row"> 
        <div className="col-12">
            <div className="card">
            <h3 className="px-1 px-lg-5 mt-4">Very Helpful.</h3>
            <p className="px-1 px-lg-5 mb-5">Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited</p>
            <hr />
            <div className="d-flex mx-2">
            {/* <img src=""  className="rounded-circle" alt=""/> */}
            <CgProfile size="60"/>
            <div> <h4>Indhuja</h4>
            <p>Chennai</p>
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

export default FeedBack;
