import React from 'react';
import '../../styles/home.css';

const Counter = () => {
  return (
    <>
    <div className="btmSpace">
      <div className="container counterSection d-none d-md-block">
        <div className="row text-center justify-content-between counterData ">
          <div className="col-12 my-2 col-md-4">
            <h1 className="counterTitle">30L+</h1>
            <p className="counterText">
              People <span className="fw-bolder">treated</span>
            </p>
          </div>
          <div className="col-12 my-2 col-md-4">
            <h1 className="counterTitle">3K+</h1>
            <p className="counterText">
              People <span className="fw-bolder">educated</span>
            </p>
          </div>
          <div className="col-12 my-2 col-md-4">
            <h1 className="counterTitle">87%</h1>
            <p className="counterText">
              Treatment <span className="fw-bolder">success rate</span>
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Display */}

      <div className="btmSpace">
      <div className="container counterSectionMobile d-block d-md-none">
        <div className="row counterDataMobile mx-3 rounded ">
          <div className="col-12 pt-4 p-2 ms-3">
            <div className="d-flex align-items-center">
              <p className="counterTitleMobile">30L+</p>
              <p className="counterTextMobile ms-4">People treated</p>
            </div>
          </div>
          <hr />
          <div className="col-12  py-3  p-2 ms-3">
            <div className="d-flex align-items-center">
              <p className="counterTitleMobile">3k+</p>
              <p className="counterTextMobile ms-4">People educated</p>
            </div>
          </div>
          <hr />
          <div className="col-12  pb-4 p-2 ms-3">
            <div className="d-flex align-items-center">
              <p className="counterTitleMobile">3k+</p>
              <p className="counterTextMobile ms-4">Treatment Sucess Rate</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Counter;
