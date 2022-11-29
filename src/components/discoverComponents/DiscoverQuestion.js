import React from 'react';
import '../../styles/home.css';
import { Nav } from 'react-bootstrap';

const DiscoverQuestion = () => {
  return (
    <>
    <div className="pb-12 pt-5 questionSection">
      <div className="container bg-[#ebf2ff]">
        <div className="row text-center justify-content-between counterData ">
          <div className="col-12 col-md-12 col-sm-12 p-12">
            <h1 className="font-bold">Have a Question ?</h1>
            <p className="counterText">There is a right doctor for you</p>
            <Nav.Link href="#doctorsSection"><button className="btn btn-lg-large btn-primary rounded-pill  heroContainerContactBtn">Ask Expert</button></Nav.Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DiscoverQuestion;
