import React from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';

const CoursesVideos = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Sex-Ed Courses For Kids</h1>
          </div>
          <div className="col-12">
            <p>First time in India in animated story format</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-5 my-3">
            <div className="card">
              <img
                src="https://quer.vercel.app/static/media/prnch01.0580e4f9aa3e55aa65d0.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex">
                  <span>
                    <BsFillStarFill color="#FEB422" />
                  </span>
                  <p className="p-1">4.2</p>
                </div>
                <div className="card-title text-truncate ">
                  <h3 className="fw-bolder">
                    How to Quit Looking at Pornography and Break..
                  </h3>
                </div>
                <p>
                  Oriental Sexual Knowledge: The importance of Love and its
                  interrelati..
                </p>
                <div className="d-flex justify-content-between">
                  <p>By Henry King</p>
                  <p>124 read this</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <h3>
                      <BiRupee />
                      1099
                    </h3>
                    <span className="text-sm text-decoration-line-through">
                      1400
                    </span>
                  </div>
                  <a href="#">
                    <p>
                      Buy Now <span>{'>'}</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-5 my-3">
            <div className="card">
              <img
                src="https://quer.vercel.app/static/media/prnch01.0580e4f9aa3e55aa65d0.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex">
                  <span>
                    <BsFillStarFill color="#FEB422" />
                  </span>
                  <p className="p-1">4.2</p>
                </div>
                <div className="card-title text-truncate">
                  <h3 className="fw-bolder">
                    How to Quit Looking at Pornography and Break..
                  </h3>
                </div>
                <p>
                  Oriental Sexual Knowledge: The importance of Love and its
                  interrelati..
                </p>
                <div className="d-flex justify-content-between">
                  <p>By Henry King</p>
                  <p>124 read this</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <h3>
                      <BiRupee />
                      1099
                    </h3>
                    <span className="text-sm text-decoration-line-through">
                      1400
                    </span>
                  </div>
                  <a href="#">
                    <p>
                      Buy Now <span>{'>'}</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesVideos;
