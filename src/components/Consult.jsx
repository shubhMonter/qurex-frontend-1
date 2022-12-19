import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate, useParams } from 'react-router-dom';
import { get, headers, post } from '../api';
import { BaseSetting } from '../utils/common';
import '../styles/Confirm.css';
import { useSelector } from 'react-redux';
import loader from '../assets/loader.gif';
import BookingAPI from '../api/bookingAPI';
import { Role } from '../state/interface';


const Consult = () => {
  const {id,bookingId}= useParams();
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.authData);
 
  useEffect(() => {
    getData();
    const today = new Date(
      new Date().toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
    );
    setCurrentTime(moment(today).format('MM-DD-YYYY h:mm A'));
  }, []);
  const [mydate, setMyDate] = useState(new Date());
  const [slotDate, setSlotDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [dateChanged, setDateChanged] = useState(true);
  const [dateData, setDateData] = useState({});
  const [dateTime, setDateTime] = useState([]);
  const [selected, setSelected] = useState({});
  const [showLoader,setShowLoader] = useState(false);
  
  const SelezionaTab = (tabId = null) => {
    setSelected({ [tabId]: !selected[tabId] });
  };
  const handleSubmit = async (e) => {

    setShowLoader(true);
    const date = mydate;
    const [day, month, year] = date.split('-');
    const resdate = [year, month, day].join('-');
    if(bookingId){
      const response  = await BookingAPI.rescheduleBooking(bookingId,{from:resdate + 'T' + time + ':00.000Z',to:moment(resdate + 'T' + time + ':00.000Z').add(15,"minutes")},auth.token)
      if(response){
        navigate(auth.role === Role.DR ? "/dashboard/appointments" : '/dashboard/my-bookings');
      }else{
        alert("Something Went Wrong!!")
      }
    }else{
      try {
        const response = await post(
          BaseSetting.doctorApiDomain + '/bookAppointment',
          {
            patientId: auth?.user?.id,
            doctorId: id,
            meta: 'test',
            from: resdate + 'T' + time + ':00.000Z',
          },
          headers
        );
        const result = response.data;
        if (result.status === 1) {
          navigate('/confirm-payment', {
            state: result.data,
            time: time,
            doctorId: id,
          });
        } else {
          alert(result.data);
        }
      } catch (error) {
        console.log({ error });
      }
    }
   
    
  };
  console.log(mydate,moment(mydate));
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }
  const changeSelectedDate = (date) => {
    
    setDateChanged(false);
    console.log(date);
    let date1 = moment(date).format('DD-MM-YYYY');
    var date2 = moment(date).format('MM-DD-YYYY'); // Or your date here
    console.log(date1);
    // console.log(date2);
    setMyDate(date1);
    console.log(typeof mydate);
    setSlotDate(date);

    if (dateData && Object.keys(dateData)?.length > 0) {
      // console.log(tConvert(dateData[date1][0].time));
      let ctime = dateData[date1]?.filter((item) => {
        let aDate = moment(date2 + ' ' + tConvert(item?.time));
        let bDate = moment(currentTime)
          .add(15, 'minutes')
          .format('MM-DD-YYYY hh:mm A');
        let cDate = moment(bDate);
        return aDate.isAfter(cDate);
      });
      setDateTime(ctime);
    }
  };

  const getData = async () => {
    try {
      setShowLoader(true);
      const slotResp = await get(
        BaseSetting.doctorApiDomain + '/availableSlots/' +id
      );
      
      const slotRes = slotResp?.data;
      console.log("slotRes");
      console.log(slotRes.data);
      setDateData(slotRes?.data);
    } catch (error) {}
    setShowLoader(false);
  };


  return (
    <section className="bookingSection">
      <div className="container bookingCalendar">
        <div className="row">

          <div className="col-md-2 col-sm-12">
          </div>

          <div className="col-md-4 col-sm-12">
            <Calendar minDate={new Date()} onChange={changeSelectedDate} />
          </div>

          <div className="col-md-6 col-sm-12">
            <span className="slot pt-5">Slots Available on {moment(slotDate).format("DD/MM/YYYY")}</span>
            <span className="gryline"></span>
            <div className="container">
           {showLoader ? <div className="losup"><img className="block m-auto" src={loader}/></div>:   
              <div className="row timeSlots pb-32">
              
                    {dateTime?.length > 0
                      ? dateTime?.map((item, index) => (
                        
                        <div className="col-md-4 col-sm-3">
                            <button
                              className={` ${
                                dateChanged && selected[index] ? 'bg-[#000000] timeBtn text-white' : ''
                              } ${
                                item?.isAvailable ? '' : 'opacity-50'
                              }  hover:bg-[#000000] hover:text-white shadow-md hover:shadow-xl duration-500 ease-in-out border rounded-md px-2 py-1 col-span-1`}
                              onClick={() => {
                                setTime(item?.time);
                                SelezionaTab(index);
                                setDateChanged(true);
                              }}
                            >
                              {tConvert(item?.time)}
                            </button>
                            </div>
                        ))
                      : <span className="notAvl">Slots are Not Available. Please Select Next Date.</span>}
                    </div>
                 } </div>
          

                
                <div className="row">
                  <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-3 col-sm-6">
                      <button onClick={() => navigate(-1)} className="back shadow-md hover:shadow-2xl duration-500 ease-in-out">Back</button>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      
                      <button 
                      className={dateTime?.length > 0 ? 
                        "book bg-[#006edc] opacity-100 shadow-md hover:shadow-2xl duration-500 ease-in-out" :
                        "book btnDisabled bg-[#ababab] opacity-100 shadow-md hover:shadow-2xl duration-500 ease-in-out" }
                        // onClick={() => authData?.name ? handleSubmit : navigate("/login")}>
                        onClick={handleSubmit} disabled={showLoader}>
                          
                          {bookingId ? "Reschedule" :"Book now"}
                      </button>
                      
                  </div>
                  <div className="col-md-3 col-sm-12"></div>
                </div>

            </div>
          </div>
      </div>

      
      {/* <div className="innerconsult">
        <div className="conleft">
          <div className="inconleft">
            <span className="slot"> Available Slots</span>
            <span className="gryline"></span>
            <div className="mt-3 timings">
              <div className="grid grid-cols-3 gap-4 topt">
                {dateTime?.length > 0
                  ? dateTime?.map((item, index) => (
                      <button
                        className={` ${
                          selected[index] ? 'bg-[#000000] text-white' : ''
                        } ${
                          item?.isAvailable ? '' : 'opacity-50'
                        }  hover:bg-[#000000] hover:text-white shadow-md hover:shadow-xl duration-500 ease-in-out border rounded-md px-2 py-1 col-span-1`}
                        onClick={() => {
                          setTime(item?.time);
                          SelezionaTab(index);
                        }}
                      >
                        {tConvert(item?.time)}
                      </button>
                    ))
                  : 'Not Available'}
              </div>
            </div>
          </div>
          <div className="mobnavdw">
            <span className="mobnav01">Back</span>
            <button className="mobnav02">Book now</button>
          </div>
        </div>

        <div className="conright">
          <Calendar minDate={new Date()} onChange={changeSelectedDate} value={new Date()} />

          <div className="bitdiv">
            <button className="back shadow-md hover:shadow-2xl duration-500 ease-in-out">
              Back
            </button>
            <button
              className="book bg-[#006edc] opacity-100 shadow-md hover:shadow-2xl duration-500 ease-in-out"
              onClick={handleSubmit}
            >
              Book now
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Consult;
