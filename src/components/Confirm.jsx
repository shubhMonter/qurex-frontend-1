import try01 from '../assets/try01.png';
import cal from '../assets/cal.png';
import card from '../assets/credit-card.png';
import clock from '../assets/clock.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/pngs/doctor.png';
import React, { useEffect, useState } from 'react';
import DoctorAPI from "../api/doctorAPI"
import loaderGif from '../assets/loader.gif';
import '../styles/Confirm.css';
const Confirm = () => {
  const navigate = useNavigate();
  const { state ,time,doctorId} = useLocation();
  console.log({state,time,doctorId});
  const [drDetailData,setDrDetailData] = useState()
  const [loader,setLoader]= useState(false)
  useEffect(()=>{
    if(state?.doctorId){
      getDoctorData(state.doctorId)
    }
  },[])
  const getDoctorData = async(id)=>{
    try {
      setLoader(true)
      const response = await DoctorAPI.getByDoctorId(id);
    if(response){
      setDrDetailData(response)
    }
    } catch (error) {
      console.log(error);
    }
    setLoader(false)
  }
  // let amount = drDetailData?.feeCharge
  const confirmPayment = () => {
    var options = {
      key: 'rzp_test_XQ6VLwgvOXG2Te', // Enter the Key ID generated from the Dashboard
      amount: '28', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Qurex',
      description: 'Booking Dr Test',
      image: logo,
      order_id: state?.payment.razorPayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      prefill: {
        name: drDetailData?.userId?.name,
        email: drDetailData?.userId?.email,
        contact: drDetailData?.userId?.mobile,
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
      handler: function (response) {
        navigate('/dashboard/my-bookings');
        console.log(response);
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on('payment.failed', function (response) {
      console.log(response.error);
    });
  };

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  // moment(date).format('DD-MM-YYYY')
  return (
    <>
    
    <div className="container">
      <div className="row">
        <span className="font-bold text-xl pt-5 ml-5 pb-5">Your Booking</span>
      </div>
    </div>
    {loader ? <div className="losup"><img className="block m-auto" src={loaderGif}/></div> :
    <div className="container pb-20">
      <div className="row">
      <div className="col-sm-2 col-md-2 col-lg-2 "></div>
        <div className="col-sm-8 shadow rounded m-auto col-md-8 col-lg-8">
          <div className="onediv p-5">
            <div className="ml-8 flex">
            <img className="docImg" src={drDetailData?.userId?.profilePic} alt="" />
              <span className="dff01 pl-5">
                  <span>
                    <span className="docname">
                      {drDetailData?.userId?.name}
                    </span>
                    <span className="gyno">
                      {drDetailData?.professionalDetail?.specializations[0]}
                    </span>
                  </span>

                  <span className="expert">
                    Expert in {drDetailData?.professionalDetail.treatments.reduce((prevValue, item) =>  prevValue + item+ ", ",' ')};
                  </span>
                </span>
            </div>
          </div>

        <div className="font-bold text-base pt-2.5 pl-2.5">Selected Slot</div>
        <div className="slotinfo p-2.5">
          <span className="si01 flex flex-row">
            <img className="imgunfo" src={cal} alt="" />
            <span className="infoslot01 p-1">
              {new Date(state.from).toDateString()}
            </span>
          </span>
          <span className="si02 flex flex-row">
            <img className="imgunfo" src={clock} alt="" />
            <span className="infoslot01 p-1">
              {tConvert(state.from.substr(11, 5))}
            </span>
          </span>
          <span className="si03 flex flex-row">
            <img className="imgunfo" src={card} alt="" />
            <span className="infoslot01 p-1">
              ₹ {drDetailData?.feeCharge} Consulting Fee
            </span>
            <span className="infoslot02">
              ( 30% Discount for Qurex User)
            </span>
          </span>
        </div>

        <div className="bg-[#f2f7ff] p-5 indivthr">
          <span className="flex flex-row -ml-9 mt-[5px]">
            <div className="mt-[2px] ">
              <img className="h-5 w-5" src={try01} alt="" />
            </div>
            <div className="ml-1">
              <Link to={"/booking-calendar/" + state.doctorId}>Change Slot</Link>
            </div>
          </span>

          <button className="cnpbtn float-right -mt-9" onClick={confirmPayment}>
            Confirm and pay
          </button>
        </div>
      </div>
      <div className="col-sm-2 col-md-8 col-lg-8"></div>
      </div>
      </div>}
      </>
  );
};

export default Confirm;
