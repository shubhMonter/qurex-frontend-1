import React from 'react';
import step1 from '../../assets/svgs/step1.svg';
import step2 from '../../assets/svgs/step2.svg';
import step3 from '../../assets/svgs/step3.svg';
import stepProcess from '../../assets/svgs/stepProcess.svg';
import '../../styles/home.css';
import '../../index.css';

const HowItWorks = () => {
  return (
    
    <div className="container-fluid howItWorksContainer">
      <div className="container howItWorksSubContainer">
        <div className="row mt-20">
          <div className="col">
            <h1 className="howItWorksTitle font-bold mt-5">How it Works</h1>
            <p className="howItWorksSubTitle">Cure your sexual issues in 3 easy steps.</p>
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-md-6 col-sm-12 block m-auto">
            <img className="relative z-10" src={step1}/>
            <img className="osbtn absolute z-0 -mt-36 ml-28" src={stepProcess}/>
          </div>
          <div className="col-md-6 col-sm-12 block m-auto">
            <p className="hiwStepTitle font-bold">Step - 1</p>
            <p className="hiwStepSubTitle font-bold">Choose the doctor yourself</p>
            <p className="hiwStepDescp">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <hr color='black' className="m-2.5"></hr>
            <p className="hiwStepSubTitle font-bold">Talk to us to help to choose the doctor.</p>
            <p className="hiwStepDescp">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-md-6 col-sm-12 block m-auto">
            <p className="hiwStepTitle font-bold">Step - 2</p>
            <p className="hiwStepSubTitle font-bold">Book an appointment with the chosen doctor</p>
            <p className="hiwStepDescp">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div>
          <div className="col-md-6 col-sm-12 block m-auto">
            <img className="relative" src={step2}/>
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-md-6 col-sm-12 block m-auto">
            <img className="relative" src={step3}/>
          </div>
          <div className="col-md-6 col-sm-12 block m-auto">
            <p className="hiwStepTitle font-bold">Step - 3</p>
            <p className="hiwStepSubTitle font-bold">Talk to your doctor in a discreet environment</p>
            <p className="hiwStepDescp">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div>
        </div>

         </div>
      </div>
  );
};

export default HowItWorks;
