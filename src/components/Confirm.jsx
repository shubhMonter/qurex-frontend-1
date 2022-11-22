import try01 from '../assets/try01.png';
import dr01 from '../assets/drimage.png';
import cal from '../assets/cal.png';
import card from '../assets/credit-card.png';
import clock from '../assets/clock.png';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/pngs/doctor.png';
import React, { useEffect, useRef, useState } from 'react';

import '../styles/Confirm.css';
import { useSelector } from 'react-redux';
const Confirm = () => {
  const navigate = useNavigate();
  const drDetail = useSelector((state) => state.drDetail);
  let drDetailData = drDetail?.data;
  console.log(drDetailData);
  const { state } = useLocation();
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
        name: drDetailData?.drUserData?.name,
        email: drDetailData?.drUserData?.email,
        contact: drDetailData?.drUserData?.mobile,
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
      <section className="confirmpay">
        <div className="incp">
          <span className="confirmur">Your Booking</span>
          <div className="divincp">
            <div className="onediv">
              <div className="inonediv">
                <img src={dr01} alt="" />
                <span className="dff01 pl-5">
                  <span>
                    <span className="docname">
                      {drDetailData?.drUserData?.name}
                    </span>
                    <span className="gyno">
                      {drDetailData?.professionalDetail?.specializations[0]}
                    </span>
                  </span>

                  <span className="expert">
                    Expert in{' '}
                    {drDetailData?.treatments?.map((item) => (
                      <>{item} </>
                    ))}
                  </span>
                </span>
              </div>
            </div>

            <div className="divt">
              <div className="indivtwoonw mt-2">
                <span className="selectedslot">Selected Slot</span>

                <div className="slotinfo">
                  <span className="si01 flex flex-row">
                    <img className="imgunfo" src={cal} alt="" />
                    <span className="infoslot01">
                      {new Date(state.from).toDateString()}
                    </span>
                  </span>
                  <span className="si02 flex flex-row">
                    <img className="imgunfo" src={clock} alt="" />
                    <span className="infoslot01">
                      {tConvert(state.from.substr(11, 5))}
                    </span>
                  </span>
                  <span className="si03 flex flex-row">
                    <img className="imgunfo" src={card} alt="" />
                    <span className="infoslot01">
                      ₹ {drDetailData?.feeCharge} Consulting Fee
                    </span>
                    <span className="infoslot02">
                      ( 30% Discount for Qurex User)
                    </span>
                  </span>
                </div>
              </div>
              <div></div>
            </div>
            <div className="divthree">
              <div className="indivthr">
                <span className="flex flex-row">
                  <div className="mt-[2px] ">
                    <img className="h-5 w-5" src={try01} alt="" />
                  </div>
                  <div className="ml-1">
                    <a href="/">Change Slot</a>
                  </div>
                </span>

                <button className="cnpbtn" onClick={confirmPayment}>
                  Confirm and pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confirm;
