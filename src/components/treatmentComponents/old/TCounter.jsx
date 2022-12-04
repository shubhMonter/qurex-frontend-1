import React from 'react'

const TCounter = () => {
  return (
    <div className="container my-5">
        <div className='row'>
            <div className='col-12 col-md-4 my-1 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='counterTitle'>49%</h1>
                <p className='text-break text-center'>men over the age of 40 experience <br/>erectile dysfunction.</p>
            </div>
            <div className='col-12 col-md-4 my-1 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='counterTitle'>91%</h1>
                <p className='text-break text-center'>people are on wrong or ineffective<br/> treatment for them.</p>
            </div>
            <div className='col-12 col-md-4 my-1 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='counterTitle'>57%</h1>
                <p className='text-break text-center'>men with diabetes experience <br/> erectile dysfunction..</p>
            </div>
        </div>
    </div>
  )
}

export default TCounter