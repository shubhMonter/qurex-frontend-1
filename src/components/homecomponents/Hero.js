import React from 'react'
import privately from '../../assets/svgs/Privately.svg';
import arrow from '../../assets/svgs/arrow.svg'

const Hero = () => {
  return (<>
  <div className='heroSection'>
    <div className="container-fluid  heroContainer">
    <div className='row d-flex justify-content-end'>
    <div className="col-12 d-md-none text-center my-3">
            <h1 className="heroContainerTitle mx-auto">Sexual issues are normal</h1>
            <p className='heroContainerParagraph mx-auto'>1 out of 5 indians encouter sexual health issue in their lifetime</p>
            <div>
            <button className="btn btn-lg-large btn-primary rounded-pill  heroContainerContactBtn">Contact an expert</button>
            <img className='heroSectionArrowMobile' src={arrow}/>
            <img className='heroSectionPrivateImageMobile' src={privately}/>

            </div>
        </div>
    <div className='col-12 col-md-6'>
        <img className='img-fluid heroImageContainer' src="https://quer.vercel.app/static/media/allgroup.a02e67bd2a4cdccecc02.png"/>
    </div>
        <div className="col-12 d-none d-md-block col-md-6 my-auto text-md-start">
            <h1 className="heroContainerTitle mx-auto mx-md-0">Sexual Issues are Normal</h1>
            <p className='heroContainerParagraph'>1 out of 5 indians encouter <br/>sexual health issue in their lifetime</p>
            <div>
            <button className="btn btn-lg-large btn-primary rounded-pill  heroContainerContactBtn">Contact an expert</button>
            <img className='heroSectionArrow' src={arrow}/>
            <img className='heroSectionPrivateImage' src={privately}/>

            </div>
           
        </div>
    </div>
    </div>
    <div className='container'>
    <div className='row py-lg-2 text-white text-center mx-5 mx-md-0 heroSectionFeature rounded shadow'>
        <div className='col-12 col-md-4 my-2 my-lg-3 d-none d-md-block '>
        <div className='d-flex align-items-center justify-content-center'>
        <span><img src="https://quer.vercel.app/static/media/locksv.34d86ab8d59e3c542fcc34d973c126ea.svg"/></span><p className='my-auto ms-2 text-start'>Personalized <br/>treatment plans</p></div></div>
        <div className='col-12 col-md-4 my-2 my-lg-3 d-none d-md-block'>
        <div className='d-flex align-items-center justify-content-center'>
        <span><img src="https://quer.vercel.app/static/media/varifsv.910e097c8050df4fa9e21483f521c3d2.svg"/></span><p className='my-auto ms-2 text-start'>Backed by best sexologists <br/>from India & USA</p></div></div>
        <div className='col-12 col-md-4 my-2 my-lg-3 d-none d-md-block'>
        <div className='d-flex align-items-center justify-content-center'>
        <span><img src="https://quer.vercel.app/static/media/silensv.f139879e5af69699dc92f99e098f532c.svg"/></span>
        <p className='my-auto ms-2 text-start'>100% <br/> confidential</p></div></div>     


         {/* Mobile code */}
         <div className='col-12  d-block d-md-none mt-3 '>
        <div className='d-flex align-items-center justify-content-start'>
        <span><img src="https://quer.vercel.app/static/media/locksv.34d86ab8d59e3c542fcc34d973c126ea.svg"/></span>
        <p className='my-auto ms-2 text-start'>Personalized Treatment <br/> plans </p>
        </div>
        <hr/>
        </div>
        <div className='col-12 col-md-4 d-block d-md-none '>
        <div className='d-flex align-items-center justify-content-start'>
        <span><img src="https://quer.vercel.app/static/media/varifsv.910e097c8050df4fa9e21483f521c3d2.svg"/></span><p className='my-auto ms-2 text-start'>Backed by best Sexologists from India and USA</p></div>
        <hr/>
        </div>
        <div className='col-12 col-md-4 d-block d-md-none mb-3'>
        <div className='d-flex align-items-center justify-content-start'>
        <span><img src="https://quer.vercel.app/static/media/silensv.f139879e5af69699dc92f99e098f532c.svg"/></span><p className='my-auto ms-2 text-start'>100% confidential</p></div></div>

    </div>
    </div>
    </div>
    </>
  )
}

export default Hero