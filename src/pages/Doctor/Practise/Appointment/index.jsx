import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMessage, AiOutlineClockCircle } from "react-icons/ai";
import moment from "moment";
import { Link } from "react-router-dom";
import drimg from "../../../../assets/pngs/doctor.png";
import DoctorAPI from "../../../../api/doctorAPI";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Appointment = () => {
  const auth = useSelector((state) => state.auth.authData);
  let doctorData = auth.user;
  const [activeTab, setActiveTab] = useState("upcomming");
  const [myBookings, setMyBookings] = useState([]);
  const [eventList, setEventList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [evtTitle, setEvtTitle] = useState("");
  const [topY, setTopY] = useState("");
  const [leftX, setLeftX] = useState("");
  //   [
  //   {
  //     title: "All Day Event",
  //     start: "2022-12-01",
  //   },
  //   {
  //     title: "Long Event",
  //     start: "2022-12-07",
  //     end: "2022-12-10",
  //   },
  //   {
  //     groupId: "999",
  //     title: "Repeating Event",
  //     start: "2022-12-09T16:00:00+00:00",
  //   },
  //   {
  //     groupId: "999",
  //     title: "Repeating Event",
  //     start: "2022-12-16T16:00:00+00:00",
  //   },
  //   {
  //     title: "Conference",
  //     start: "2022-12-04",
  //     end: "2022-12-06",
  //   },
  //   {
  //     title: "Meeting",
  //     start: "2022-12-05T10:30:00+00:00",
  //     end: "2022-12-05T12:30:00+00:00",
  //   },
  //   {
  //     title: "Lunch",
  //     start: "2022-12-05T12:00:00+00:00",
  //   },
  //   {
  //     title: "Birthday Party",
  //     start: "2022-12-06T07:00:00+00:00",
  //   },
  //   {
  //     url: "http://google.com/",
  //     title: "Click for Google",
  //     start: "2022-12-28",
  //   },
  // ]

  const getBookings = async () => {
    const bookings = await DoctorAPI.getMyBookings(doctorData, auth.token);
    //console.log(bookings);
    if (bookings && bookings?.length > 0) {
      bookings.sort(function (a, b) {
        return moment.utc(a.from).diff(moment.utc(b.from));
      });
      console.log(bookings);
      setMyBookings(bookings);
      setEventList(
        bookings.map((x) => {
          return {
            id: x._id,
            title: x.patientId.name,
            start: moment(x.from).toISOString(),
            end: moment(x.to).toISOString(),
          };
        })
      );
    }
  };
  console.log({ eventList });
  const activeTabClasses =
    " pb-3 border-2 border-transparent border-b-[#655af4] ";
  useEffect(() => {
    getBookings();
  }, []);

  const showBookingDetails = (evtInfo,evt) => {
    // const editFilterData = data.filter((item) => {
    //   return item._id == id;
    // })[0];
    // setEditData(editFilterData);
    setEvtTitle(evtInfo.event.Title);
    setTopY(evt.pageY);
    setLeftX(evt.pageX);
    setShowModal(true);
  };



  const renderEventContent = (eventInfo) => {
    console.log(eventInfo);
    return (
      <>
      <span onClick= {() => showBookingDetails(eventInfo,Event)}>
          <b>{moment(eventInfo.event.startStr).format("hh:mm")}</b>
          {/* //use str only  to render */}
          <br />
          <i>{eventInfo.event.title}</i>
        </span>
      </>
    );
  };
  return (
    <div className="flex flex-col px-10 font-montserrat">
      <div className="py-6 font-semibold text-2xl text-[#636363]"></div>
      {/* <div className=" font-montserrat text-[#636363] shadow-lg rounded-lg bg-white flex flex-col ">
        <div className="flex flex-row p-3 mx-3 font-bold ">
          <div
            className={`flex flex-row cursor-pointer hover:text-[#655af4]  ${
              activeTab == 'upcomming' ? activeTabClasses : ''
            }`}
            onClick={() => setActiveTab('upcomming')}
          >
            <div className="">
              <AiOutlineMessage className="mt-[2px] " />
            </div>
            <div className="pl-1">Upcomming Appointments</div>
          </div>
          <div
            className={`ml-10 flex flex-row cursor-pointer hover:text-[#655af4]  ${
              activeTab == 'previous' ? activeTabClasses : ''
            }`}
            onClick={() => setActiveTab('previous')}
          >
            <div className="">
              <AiOutlineMessage className="mt-[2px] " />
            </div>
            <div className="pl-1">Previous Appointments</div>
          </div>
        </div>

        {myBookings?.map(
          (booking, key) =>
            (activeTab == 'upcomming'
              ? moment(booking.to).diff(moment(), 'minute') > 0
              : moment(booking.to).diff(moment(), 'minute') < 0) && (
              <AppointmentComponent key={key} booking={booking} />
            )
        )}
      </div> */}
      {eventList?.length > 0 && (
        <div className="calendar">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            nowIndicator={true}
            selectable={true}
            initialEvents={eventList}
            eventContent={renderEventContent}
            //timeZone="UTC"
          />
          {showModal ? (
          <>
            <div className="bookingDetails shadow rounded">
              <span className="closeModal" onClick={() => setShowModal(false)}>x</span>
              <h3>{evtTitle}</h3>
            </div>
          </> ) : null }
        </div>
        
      )}
    </div>
  );
};

// const AppointmentComponent = ({ booking }) => {
//   const channel = "test";
//   const timeOngoing =
//     true ||
//     (moment(booking.from).diff(moment(), "minute") < 0 &&
//       moment(booking.from).diff(moment(), "minute") > 0);
//   return (
//     <>
//       <div className="px-3 my-8 pt-2 mx-16 border-l-4 border-[#655af4]  shadow shadow-sm flex flex-col">
//         <div className="p-2 font-semibold">
//           <h6>Appointment Date</h6>{" "}
//         </div>
//         <div className="flex flex-row py-2">
//           <div className="mt-[2px] ">
//             <AiOutlineClockCircle />
//           </div>
//           <div className="pl-1 font-semibold">
//             {moment(booking?.from).utc().format("Do MMMM YYYY")}
//           </div>
//           <div className="pl-4">
//             {" "}
//             {moment(booking?.from).utc().format("dddd")}
//           </div>
//           <li className="pl-4">
//             {" "}
//             {moment(booking?.from).utc().format("hh:mm A")} -{" "}
//             {moment(booking?.to).utc().format("hh:mm A")}
//           </li>
//         </div>
//         <div className="flex flex-row py-6 mt-4 border-t border-t-gray-100">
//           <div>
//             <img className="w-16 h-16 rounded-3xl" src={drimg} alt="" />
//           </div>
//           <div className="flex w-full pl-5 justify-content-between align-items-start">
//             <div>
//               <div className="flex flex-row">
//                 <div className="font-semibold">{booking?.patientId?.name}</div>
//                 <div className="ml-3 px-5 py-1 bg-opacity-30 text-xs bg-[#655af4] text-[#655af4] rounded-5 font-bold">
//                   Gynecologist
//                 </div>
//               </div>
//               <div className="text-xs">View Profile</div>
//             </div>
//             {true ||
//             (channel &&
//               moment(booking.from).diff(moment(), "minute") < 5 &&
//               moment(booking.to).diff(moment(), "minute") > 0) ? (
//               // {channel && moment(booking.to).diff(moment(), 'minute') > 0 ? (
//               <Link
//                 to={
//                   timeOngoing &&
//                   `/video-call?room_id=${channel}&user_id=${booking?._id}`
//                 }
//                 className={`bg-[#7367f0]  w-52 no-underline rounded-lg text-white flex justify-center py-2 font-semibold ${
//                   !timeOngoing ? "opacity-75" : ""
//                 }`}
//               >
//                 <div className="mt-1">
//                   <svg
//                     stroke="currentColor"
//                     fill="currentColor"
//                     stroke-width="0"
//                     viewBox="0 0 24 24"
//                     height="1em"
//                     width="1em"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path>
//                     <path d="M13 6h-2v3H8v2h3v3h2v-3h3V9h-3z"></path>
//                   </svg>
//                 </div>
//                 <div className="pl-1 ">Join Call with Patient</div>
//               </Link>
//             ) : (
//               <></>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Appointment;
