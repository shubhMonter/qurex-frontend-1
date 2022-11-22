import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight,
  FaBars,
  FaChevronRight,
  FaDollarSign,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaUser,
  FaRegMap,
} from 'react-icons/fa';

import {
  FiUserCheck,
  FiAnchor,
  FiHeart,
  FiUsers,
  FiUser,
  FiTarget,
} from 'react-icons/fi';
import { TbFirstAidKit, TbTicket } from 'react-icons/tb';
import { SiTarget } from 'react-icons/si';
import { BsBoundingBox, BsCircle, BsClipboard, BsWatch } from 'react-icons/bs';
import { GiTargeting } from 'react-icons/gi';
import {
  BiCalendar,
  BiChip,
  BiFolderPlus,
  BiLink,
  BiLocationPlus,
  BiMicrochip,
  BiQuestionMark,
  BiUserPlus,
} from 'react-icons/bi';
import { BsBox } from 'react-icons/bs';
import { MdFilter1 } from 'react-icons/md';

import { AiOutlineQuestionCircle, AiOutlineLink } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../../assets/pngs/logo.jpg';
import { Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import useWindowSize from '../../../hooks/useWindowSize';
import { useSelector, useDispatch } from 'react-redux';

const Sidebar = ({ isMobileOpen, toggleSidebar, isFixedSidebar }) => {
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [practise, setPractise] = useState(false);
  const [profile, setProfile] = useState(false);
  const toggle = () => {
    if (isFixedSidebar == false) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    setIsOpen(isMobileOpen);
  }, [isMobileOpen]);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };
  const size = useWindowSize();

  var user = auth?.data;
  const mytoggle = () => {
    if (size.width > 767) {
      toggle();
    }
  };
  return (
    <div
      className={`scrollbar-hide fixed z-10 h-screen overflow-auto  bg-white text-[#565656] ${
        isOpen ? '' : 'hidden sm:hidden'
      } md:flex lg:flex xl:flex flex-col`}
    >
      {isOpen ? (
        <div className="px-6 py-7 w-64" onMouseLeave={mytoggle}>
          <div className="bg-white fixed flex justify-between">
            <Link to="/dashboard" className="flex flex-row">
              <div>
                <img className="h-10 w-10" src={logo} alt="" />
              </div>
              <div className="pt-1 pl-3 text-xl font-montserrat font-semibold text-[#655af4]">
                Qurex
              </div>
            </Link>
            <div className="ml-20">
              <SiTarget
                onClick={toggleSidebar}
                className="text-[#655af4] mt-2 cursor-pointer"
              />
            </div>
          </div>
          {user?.role == 'admin' ? (
            <>
              <div className="mt-10 font-montserrat flex flex-col">
                <div className="flex flex-row pl-1.5 pt-6 ">
                  <div className="pl-1 text-[12px] text-[#999999] font-semibold">
                    ADMIN
                  </div>
                </div>
                <Link
                  to="/dashboard/doctor-verification"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <FiUserCheck className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer truncate text-[15px] font-medium pl-4">
                    Doctor Verification
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    doctor {String(isMobileOpen)}
                  </div>
                </div>
                <Link
                  to="/dashboard/specializations"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <FiAnchor className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Specialities
                  </div>
                </Link>
                <Link
                  to="/dashboard/treatment"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer flex flex-row">
                    <div className="text-xl">
                      <FiHeart className="ml-[2px]" />
                    </div>
                    <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                      Treatments
                    </div>
                  </div>
                  <div>
                    <FaChevronRight className="cursor-pointer text-md pt-1" />
                  </div>
                </Link>
                <Link
                  to="/dashboard/treatment-categories"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer flex flex-row">
                    <div className="text-xl">
                      <FiHeart className="ml-[2px]" />
                    </div>
                    <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                      Categories
                    </div>
                  </div>
                  <div>
                    <FaChevronRight className="cursor-pointer text-md pt-1" />
                  </div>
                </Link>
                <Link
                  to="/dashboard/system-of-medicine"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <TbFirstAidKit className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    System of Medicine
                  </div>
                </Link>
                <Link
                  to="/dashboard/cities"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BiLocationPlus className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Cities
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    user management
                  </div>
                </div>
                <Link
                  to="/dashboard/sub-roles"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <FiUsers className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Roles
                  </div>
                </Link>
                <Link
                  to="/dashboard/modules"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BsBox className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Modules
                  </div>
                </Link>
                <Link
                  to="/dashboard/user-lists"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <FiUser className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    User
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    ai bot
                  </div>
                </div>
                <Link
                  to="/dashboard/ai-test-create"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <BiChip className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Ai Tests
                  </div>
                </Link>
                <Link
                  to="/dashboard/ai-test-helpers"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <BiQuestionMark className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Ai Test Helpers
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    business portal
                  </div>
                </div>
                <Link
                  to="/dashboard/generate-prescription"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <BiLink className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Generate Prescription
                  </div>
                </Link>
                <Link
                  to="/dashboard/manual-refund"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <BiLink className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Manual Refund
                  </div>
                </Link>
                <Link
                  to="/dashboard/booking-list"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <FiTarget className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Booking List
                  </div>
                </Link>
                <Link
                  to="/dashboard/total-booking"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <FiTarget className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Total Bookings
                  </div>
                </Link>
                <Link
                  to="/dashboard/doctor-payments"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <FaDollarSign className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Payments
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    marketing
                  </div>
                </div>
                <Link
                  transition
                  duration-700
                  ease-in-out
                  to="/dashboard/marketing-pages"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <BsBoundingBox className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Pages
                  </div>
                </Link>
                <Link
                  to="/dashboard/leads"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <GiTargeting className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Leads
                  </div>
                </Link>
                <Link
                  to="/dashboard/seo"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <MdFilter1 className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    SEO
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    journey analytics
                  </div>
                </div>
                <Link
                  to="/dashboard/logs"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <FaRegMap className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Customer Journey
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    support
                  </div>
                </div>
                <Link
                  to="/dashboard/tickets"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <TbTicket className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Tickets
                  </div>
                </Link>
              </div>
            </>
          ) : user?.role == 'doctor' ? (
            <>
              <div className="mt-10 font-montserrat flex flex-col">
                <div className="flex flex-row pl-1.5 pt-6 ">
                  <div className="pl-1 text-[12px] text-[#999999] font-semibold">
                    DASHBOARDS
                  </div>
                </div>
                <Link
                  to="/dashboard/business-dashboard"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BsClipboard className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer truncate text-[15px] font-medium pl-4">
                    Business Dashboard
                  </div>
                </Link>
                <Link
                  to="/dashboard/practise-dashboard"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BsClipboard className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer truncate text-[15px] font-medium pl-4">
                    Practise Dashboard
                  </div>
                </Link>
                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    settings
                  </div>
                </div>

                <div
                  onClick={() => setProfile(!profile)}
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer flex flex-row">
                    <div className="text-xl">
                      <BiUserPlus className="ml-[2px]" />
                    </div>
                    <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                      Profile
                    </div>
                  </div>
                  <div>
                    <FaChevronRight className="cursor-pointer text-md pt-1" />
                  </div>
                </div>
                {profile ? (
                  <>
                    <Link
                      to="/dashboard/profile-view"
                      className="hover:translate-x-3 transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                    >
                      <div className="cursor-pointer flex fle x-row">
                        <div className="text-xl">
                          <BsCircle className="ml-1 h-4 w-4 ml-[2px]" />
                        </div>
                        <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                          View
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/dashboard/profile-update"
                      className="hover:translate-x-3 transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                    >
                      <div className="cursor-pointer flex fle x-row">
                        <div className="text-xl">
                          <BsCircle className="ml-1 h-4 w-4 ml-[2px]" />
                        </div>
                        <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                          Update
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/dashboard/profile-delete"
                      className="hover:translate-x-3 transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                    >
                      <div className="cursor-pointer flex fle x-row">
                        <div className="text-xl">
                          <BsCircle className="ml-1 h-4 w-4 ml-[2px]" />
                        </div>
                        <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                          Delete
                        </div>
                      </div>
                    </Link>
                  </>
                ) : (
                  ''
                )}
                <div
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                  onClick={() => setPractise(!practise)}
                >
                  <div className="cursor-pointer flex flex-row">
                    <div className="text-xl">
                      <BiFolderPlus className="ml-[2px]" />
                    </div>
                    <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                      Practise
                    </div>
                  </div>
                  <div>
                    <FaChevronRight className="cursor-pointer text-md pt-1" />
                  </div>
                </div>
                {practise ? (
                  <Link
                    to="/dashboard/availability"
                    className="transition duration-700 ease-in-out flex justify-between pl-1.5 pt-6 "
                  >
                    <div className="cursor-pointer flex fle x-row">
                      <div className="text-xl">
                        <BsCircle className="ml-1 h-4 w-4 ml-[2px]" />
                      </div>
                      <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                        Availability
                      </div>
                    </div>
                  </Link>
                ) : (
                  ''
                )}

                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    practise
                  </div>
                </div>
                <Link
                  to="/dashboard/appointments"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BiCalendar className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Appointments
                  </div>
                </Link>
                <Link
                  to="/dashboard/consultation-history"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BsWatch className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Consultation History
                  </div>
                </Link>

                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    support
                  </div>
                </div>
                <Link
                  to="/dashboard/tickets"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <TbTicket className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Tickets
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mt-10 font-montserrat flex flex-col">
                <div className="flex flex-row pl-1.5 pt-6 ">
                  <div className="pl-1 text-[12px] text-[#999999] font-semibold">
                    USER DASHBOARD
                  </div>
                </div>
                <Link
                  to="/dashboard/user-profile"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BsClipboard className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer truncate text-[15px] font-medium pl-4">
                    Profile
                  </div>
                </Link>
                <Link
                  to="/dashboard/my-bookings"
                  className="hover:translate-x-3 transition duration-700 ease-in-out flex flex-row pl-1.5 pt-6 "
                >
                  <div className="cursor-pointer text-xl">
                    <BsClipboard className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer truncate text-[15px] font-medium pl-4">
                    Other
                  </div>
                </Link>

                <div className="flex flex-row pl-1.5 pt-8 ">
                  <div className="uppercase pl-1 text-[12px] text-[#999999] font-semibold">
                    support
                  </div>
                </div>
                <Link
                  to="/dashboard/tickets"
                  className="hover:translate-x-3 transition duration-700 ease-in-out cursor-pointer flex flex-row pl-1.5 pt-6 "
                >
                  <div className="text-xl">
                    <TbTicket className="ml-[2px]" />
                  </div>
                  <div className="cursor-pointer  truncate text-[15px] font-medium pl-4">
                    Tickets
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="px-6 py-7 w-20" onMouseOver={toggle}>
          <div className="h-10 w-10">
            <img src={logo} />
          </div>
          {user?.role == 'ADMIN' ? (
            <>
              <div className="flex flex-col">
                <div className="pl-1.5 pt-6 text-xl">
                  <FiUserCheck />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiAnchor />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiHeart />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <TbFirstAidKit />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BiLocationPlus />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiUsers />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BsBox />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiUser />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BiMicrochip />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <AiOutlineQuestionCircle />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <AiOutlineLink />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <AiOutlineLink />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiTarget />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiUserCheck />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiUserCheck />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <FiUserCheck />
                </div>
              </div>{' '}
            </>
          ) : user?.role == 'doctor' ? (
            <>
              <div className="flex flex-col">
                <div className="pl-1.5 pt-6 text-xl">
                  <BsClipboard />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BsClipboard />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BiUserPlus />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BiFolderPlus />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BiCalendar />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BsWatch />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <TbTicket />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                <div className="pl-1.5 pt-6 text-xl">
                  <BsClipboard />
                </div>
                <div className="pl-1.5 pt-6 text-xl">
                  <BsClipboard />
                </div>

                <div className="pl-1.5 pt-6 text-xl">
                  <TbTicket />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
