import React from 'react';
import { BsFillStarFill} from 'react-icons/bs';
import discoverCourse1 from '../../assets/svgs/discoverCourse1.svg';
import discoverCourse2 from '../../assets/svgs/discoverCourse2.svg';
import discoverCourse3 from '../../assets/svgs/discoverCourse3.svg';
import discoverCourse4 from '../../assets/svgs/discoverCourse4.svg';

const DiscoverArticles = () => {

  return (

    <div className="container-fluid courseSection">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="font-bold mt-5 courseSectionTitle">Top Articles</h1>
          </div>
        </div>
      <ul
          className="my-3 nav nav-pills my-md-5"
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
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane-2"
              type="button"
              role="tab"
              aria-controls="home-tab-pane-2"
              aria-selected="false"
            >
              Know Your Body
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane-3"
              type="button"
              role="tab"
              aria-controls="home-tab-pane-3"
              aria-selected="false"
            >
              Contraception
            </button>
          </li>
        </ul>
        <div className="tab-content pb-2.5" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >

            <div className="row justify-content-center">
              <div className="col-12 col-md-12 col-sm-12 CourseContainer">
              <div className="card rounded-none shadow border-0">
                <div className="container p-1">
                  <div className="row">
                      <div className="col-md-3 col-12 col-sm-12">
                        <div className="highlightGreen absolute">25% off</div>
                        <img src={discoverCourse1} className="CourseImage"/>
                      </div>
                      <div className="col-md-9 col-12 col-sm-12">
                        <div className="highlightGreen float-right">Featured</div>
                        <div className="mt-3 d-flex">
                          <span className="mx-1 pb-0.5 font-bold"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.0</span>
                        </div>
                        <h3 className="CourseDataTitle text-wrap w-10/12">Basic Sex for Recreation Plus Sexual Wellness Coaching</h3>
                        <p className="CourseParagraph">Basics of Sex for Recreation with FREE Add-On Professional Sexual Health Certification</p>
                        <div className="d-flex justify-content-between authorBox">
                          <p className="my-auto text-gray-600">By Henry King</p>
                        </div>
                        <div className="d-flex justify-content-between ">
                          <div className="d-flex">
                            <div className="highlightPurple">124 read this</div>
                          </div>
                          <div className="px-3 d-flex">
                            <p className="price pr-0.5 pt-4">₹ 1099</p>
                            <p className="strikedPrice pr-2.5 pt-4">₹ 1400</p>
                            <p className="buyNowText pr-0.5 pt-4">Buy Now &gt;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="row justify-content-center pt-5">

              <div className="col-12 col-md-4 col-sm-12 CourseContainer pb-1.5">
                <div className="card shadow rounded-none border-0">
                  <div className="highlightGreen absolute">25% off</div>
                  <img src={discoverCourse2} className="CourseImage"/>
                  <div className="card-body">
                    <p className="CourseDataTitle text-wrap">
                      Taoist Sex Education - The Multi Orgasmic Man
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
              </div>

              <div className="col-12 col-md-4 col-sm-12 CourseContainer pb-1.5">
                <div className="card shadow rounded-none border-0">
                  <img src={discoverCourse3} className="CourseImage"/>
                  <div className="card-body">
                    <p className="CourseDataTitle text-wrap">
                      Sex Education - Required for Teens and Parents
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
              </div>

              <div className="col-12 col-md-4 col-sm-12 CourseContainer pb-1.5">
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
              </div>

            </div>

          </div>
        </div>
        {/* <div className="tab-pane fade show active" id="home-tab-pane-2" role="tabpanel" aria-labelledby="home-tab" tabindex="0">New Tab</div>
        <div className="tab-pane fade show active" id="home-tab-pane-3" role="tabpanel" aria-labelledby="home-tab" tabindex="0">New Tab</div> */}

      </div>
    </div>
  );
};

export default DiscoverArticles;