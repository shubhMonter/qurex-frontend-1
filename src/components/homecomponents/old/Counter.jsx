import React from 'react'

const Counter = () => {
  return (
    <div className='container counterSection mb-5'>
        <div className='row mx-5 text-center justify-content-between '>
            <div className='col-12 my-2 col-md-4'>
                <h1 className='counterTitle'>30L+</h1>
                <p>People <span className='fw-bolder'>treated</span></p>
            </div>
            <div className='col-12 my-2 col-md-4'>
                <h1 className='counterTitle'>3K+</h1>
                <p>People <span className='fw-bolder'>educated</span></p>
            </div>
            <div className='col-12 my-2 col-md-4'>
                <h1 className='counterTitle'>87%</h1>
                <p>Treatment <span className='fw-bolder'>success rate</span></p>
            </div>
        </div>
    </div>
  )
}

export default Counter