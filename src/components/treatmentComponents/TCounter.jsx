import React from 'react'

const TCounter = () => {
  return (
    <div className="container my-5">
        <div className='row'>
            <div className='col-12 col-md-4 my-1 d-flex flex-column justify-content-center align-items-center'>
                <p className='counterTitle '>49%</p>
                <p className='text-break text-start counterParagraph'>men over the age of 40 <br/> experience erectile <br/> dysfunction.</p>
            </div>
            <div className='col-12 col-md-4 my-1 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='counterTitle'>91%</h1>
                <p className='text-break text-start counterParagraph'>people are on wrong or <br/> ineffective treatment <br/> for them.</p>
            </div>
            <div className='col-12 col-md-4 my-1 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='counterTitle'>57%</h1>
                <p className='text-break text-start counterParagraph'>men with diabetes <br/> experience  erectile <br/> dysfunction..</p>
            </div>
        </div>
    </div>
  )
}

export default TCounter