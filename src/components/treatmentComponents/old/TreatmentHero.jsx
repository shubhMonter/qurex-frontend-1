import React from 'react'

const TreatmentHero = () => {
  return (
    <div className="container-fluid treatmentPageSection pt-5">
    <div className="container shadow rounded">
    <div className="row justify-content-between">
    <div className="col-12 col-md-5 d-flex my-5 ms-md-5 flex-column align-items-center align-items-md-start justify-content-center"> 
    <h3>What is</h3>
    <h1>Erectile Dysfunction?</h1>
    <p className='px-4 px-md-0 text-center text-md-start'>ED is defined as the inability to sustain an erection sufficient for sexual intercourse. The condition can affect anyone at any age.</p>
     <button className="btn btn-lg bg-primary text-white rounded-pill my-3 my-lg-5">Contact Us</button>
    </div>
    <div className="col-12 col-md-6 p-0"> 
    <img className="img-fluid" src="https://quer.vercel.app/static/media/trtmnt01.641bca482fbcf12e518c.png"/></div>
    </div>
    </div>
    </div>
  )
}

export default TreatmentHero