import React from 'react';
import doc1 from '../../assets/doc1.png';
import doc2 from '../../assets/doc2.png';
import doc3 from '../../assets/doc3.png';
import star from '../../assets/star.png';
import hat from '../../assets/hat.png';
import globe from '../../assets/globe.png';
import cal from '../../assets/cal.png';

const LandingOs = () => {
  return (
    <section className="los">
      <section className="inos">
        <div className="losup">
          <div className="lopupleft">
            <span className="losheading">Our Sexologist</span>
            <span className="lossubheading">
              Best sexual health experts from India & USA
            </span>
          </div>
          <div className="lopupright">
            <button className="osbtn"> View All Doctors</button>
          </div>
        </div>
        <div className="losdown">
          <div className="losdownleft">
            <img className="doc001" src={doc1} alt="" />
            <img className="doc002" src={doc2} alt="" />
            <img className="doc003" src={doc3} alt="" />

            <input
              type="range"
              className="form-range"
              min="0"
              max="2"
              step="1"
              id="customRange3"
            ></input>
          </div>
          <div className="losdownright">
            <div className="inldr">
              <span className="drsaravanan">Dr. Saravanan</span>
              <div className="docabouthome">
                <img src={star} alt="" />
                <span>Specialised in Sexual & Relationship Psychotherapy</span>
              </div>
              <div className="docabouthome">
                <img src={hat} alt="" />
                <span>MBBS, MD (Psychiatry)</span>
              </div>
              <div className="docabouthome">
                <img src={globe} alt="" />
                <span>Language known English, Tamil, Hindi</span>
              </div>
              <div className="docabouthome">
                <img src={cal} alt="" />
                <span>8+ years of experience</span>
              </div>

              <div className="grybox">
                <span className="grybox1">
                  "Sexual health in India is commonly neglected and medical help
                  for intimacy and relationship issues is sought very late.
                </span>

                <span className="grybox2">Dr. Saravanan </span>
              </div>
            </div>
          </div>
        </div>

        <button className="wosbtn"> View All Doctors</button>
      </section>
    </section>
  );
};

export default LandingOs;
