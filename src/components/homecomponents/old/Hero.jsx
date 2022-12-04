import React, { useState } from 'react';
import { VideoRoom } from '../VideoRoom';

import { Link } from 'react-router-dom';

const Hero = () => {
  const [joined, setJoined] = useState(false);

  return (
    <>
      <div className="heroSection">
        <div className="container-fluid  heroContainer">
          <div className="row d-flex justify-content-end">
            <div className="col-12 d-md-none text-center my-3">
              <h1>Sexual issues are normal</h1>
              <p>
                1 out of 5 indians encouter <br />
                sexual health issue in their lifetime
              </p>
              <button className="btn btn-lg-large btn-primary rounded-pill py-2">
                Contact an expert
              </button>
            </div>
            <div className="col-12 col-md-6">
              <img
                className="img-fluid heroImageContainer"
                src="https://quer.vercel.app/static/media/allgroup.a02e67bd2a4cdccecc02.png"
              />
            </div>
            <div className="col-12 d-none d-md-block col-md-6 my-auto text-md-start">
              {!joined && (
                <button onClick={() => setJoined(true)}>Join Room</button>
              )}

              {joined && (
                <>
                  <button onClick={() => setJoined(false)}>To Lobby</button>
                  <VideoRoom />
                </>
              )}
              <h1>Sexual issues are normal</h1>
              <p>
                1 out of 5 indians encouter <br />
                sexual health issue in their lifetime
              </p>
              <button className="text-white btn btn-lg-large btn-primary rounded-pill py-2">
                <Link to="/doctor">Contact an expert</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="container heroSectionFeature shadow">
          <div className="row py-lg-2 text-white text-center shadow">
            <div className="col-12 col-md-4 my-2 my-lg-3">
              <div className="d-flex align-items-center justify-content-lg-center">
                <span>
                  <img src="https://quer.vercel.app/static/media/locksv.34d86ab8d59e3c542fcc34d973c126ea.svg" />
                </span>
                <p className="my-auto text-start">
                  Personalized treatment plans
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-lg-3">
              <div className="d-flex align-items-center justify-content-lg-center">
                <span>
                  <img src="https://quer.vercel.app/static/media/varifsv.910e097c8050df4fa9e21483f521c3d2.svg" />
                </span>
                <p className="my-auto text-start">
                  Backed by best sexologists from India & USA
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-lg-3">
              <div className="d-flex align-items-center justify-content-lg-center">
                <span>
                  <img src="https://quer.vercel.app/static/media/silensv.f139879e5af69699dc92f99e098f532c.svg" />
                </span>
                <p className="my-auto text-start">100% confidential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
