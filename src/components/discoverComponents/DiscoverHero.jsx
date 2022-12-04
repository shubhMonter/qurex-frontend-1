import React from 'react';
import threePeople from '../../assets/svgs/threePeople.svg';

const DiscoverHero = () => {
  return (

    <div className='heroSection'>
      <div className="heroDiscoverContainer">
        <div className='row d-flex justify-content-end'>
            <div className="col-12 col-md-6 my-3 text-left m-auto w-9/12">
                    <p className="heroContainerParagraph mx-auto pt-20 w-9/12">Home &gt; Course Listing</p>
                    <h1 className="heroContainerTitle mx-auto font-bold w-9/12">Enhance your knowledge from the topcourses</h1>
                    <div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <img className='img-fluid heroImageContainer float-right' src={threePeople}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverHero;