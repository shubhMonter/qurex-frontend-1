import React from 'react';
import { BsFillStarFill} from 'react-icons/bs';
import discoverCourse1 from '../../assets/svgs/discoverCourse1.svg';
import discoverCourse2 from '../../assets/svgs/discoverCourse2.svg';
import discoverCourse3 from '../../assets/svgs/discoverCourse3.svg';
import discoverCourse4 from '../../assets/svgs/discoverCourse4.svg';
import { Link, useLocation } from 'react-router-dom';

const TreatmentArticles = () => {

  return (

    <div className="container-fluid courseSection mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="font-bold courseSectionTitle">Top Articles Should Know</h1>
          </div>
          <div className="col text-end d-none d-md-block">
            <Link to={'/discover'}>
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill"
              >
                View All
              </button>
            </Link>
          </div>
        </div>

            

            

            <div className="row justify-content-center pt-5">

              <div className="col-12 col-md-5 col-sm-12 pb-1.5">
                <div className="card shadow rounded-none border-0">
                  <div className="highlightGreen absolute">25% off</div>
                  <img src={discoverCourse2} className="CourseImage"/>
                  <div className="card-body">
                    <div className="rating d-flex">
                      <span className="mx-1"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.2</span>
                    </div>
                    <p className="CourseDataTitle text-wrap">
                      Taoist Sex Education - The Multi Orgasmic Man
                    </p>
                    <p className="text-xs">
                      Oriental Sexual Knowledge: The importance of Love and its interrelati..
                    </p>
                    <div className="d-flex justify-content-between authorBox">
                      <p className="my-auto text-gray-600 text-xs">By Henry King</p>
                      <div className="d-flex">
                        <button className="courseReadBtn">124 read this</button>
                      </div>
                    </div>
                    <span className="mx-3">
                      <hr className="-mt-3 -mb-3" />
                    </span>
                    <div className="mx-3 d-flex justify-content-between ">
                      <div className="d-flex">
                        <p className="price">₹ 1099</p>
                        <p className="strikedPrice">₹ 1400</p>
                      </div>
                      <div className="px-3 d-flex">
                        <p className="buyNowText underline">Buy Now </p>
                        <div>
                          <p className="buyNowImageArrow">{'>'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-1 col-sm-12 pb-1.5"></div>
              <div className="col-12 col-md-5 col-sm-12 pb-1.5">
                <div className="card shadow rounded-none border-0">
                  <img src={discoverCourse3} className="CourseImage"/>
                  <div className="card-body">
                    <div className="rating d-flex">
                      <span className="mx-1"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.2</span>
                    </div>
                    <p className="CourseDataTitle text-wrap">
                      Sex Education - Required for Teens and Parents
                    </p>
                    <p className="text-xs">
                      Oriental Sexual Knowledge: The importance of Love and its interrelati..
                    </p>
                    <div className="d-flex justify-content-between authorBox">
                      <p className="my-auto text-gray-600 text-xs">By Henry King</p>
                      <div className="d-flex">
                        <button className="courseReadBtn">124 read this</button>
                      </div>
                   </div>
                   <span className="mx-3">
                      <hr className="-mt-3 -mb-3" />
                    </span>
                    <div className="mx-3 d-flex justify-content-between ">
                      <div className="d-flex">
                        <p className="price">₹ 1099</p>
                        <p className="strikedPrice">₹ 1400</p>
                      </div>
                      <div className="px-3 d-flex">
                        <p className="buyNowText underline">Buy Now </p>
                        <div>
                          <p className="buyNowImageArrow">{'>'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-12 col-md-4 col-sm-12 CourseContainer pb-1.5">
                <div className="card shadow rounded-none border-0">
                  <img src={discoverCourse4} className="CourseImage"/>
                  <div className="card-body">
                    <p className="CourseDataTitle text-wrap">
                      Boost your Testostorone and Sex Drive Naturally
                    </p>
                    <p className="text-xs">
                      Oriental Sexual Knowledge: The importance of Love and its interrelati..
                    </p>
                    <div className="d-flex justify-content-between authorBox">
                      <p className="my-auto text-gray-600 text-xs">By Henry King</p>
                      <div className="rating d-flex">
                        <span className="mx-1"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.2</span>
                      </div>
                  </div>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </div>
  );
};

export default TreatmentArticles;