import { useState, useEffect } from 'react';
import { FaBox, FaHome, FaUserCircle } from 'react-icons/fa';
import { BiCalendar, BiFullscreen, BiUserPlus } from 'react-icons/bi';
import { Cookies } from 'react-cookie';
import { TbCircleCheck } from 'react-icons/tb';
import userimg from '../../../assets/pngs/user.jpg';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { emptyAuth } from '../../../state/auth/Actions';
import { useSelector, useDispatch } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const Navbar = ({ toggleMobile }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  var userData = auth?.data;
  // const [userData, setUserData] = useState({});
  // var user1 = JSON.parse(localStorage.getItem('userData') || '[]');
  const navigate = useNavigate();
  // useEffect(() => {
  //   var user = JSON.parse(localStorage.getItem('userData') || '[]');
  //   console.log(user);
  //   setUserData(user);
  // }, []);
  const signOut = () => {
    dispatch(emptyAuth(userData));
    navigate('/');
  };

  return (
    <nav className="md:ml-10 lg:ml-10 xl:ml-10 max-w-full bg-white shadow-sm rounded-md mx-8 mt-5">
      <div className="py-1 justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  onClick={toggleMobile}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    onClick={toggleMobile}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )} */}
              </button>
            </div>

            {userData?.role == 'doctor' ? (
              <>
                <div className="text-[#636363] flex flex-row">
                  <div>
                    <BiUserPlus className="cursor-pointer hover:text-[#776bf0] text-2xl" />
                  </div>
                  <div className="mx-3">
                    <TbCircleCheck className="cursor-pointer hover:text-[#776bf0] text-2xl" />
                  </div>
                  <div>
                    <BiCalendar className="cursor-pointer hover:text-[#776bf0] text-2xl" />
                  </div>
                </div>
              </>
            ) : userData?.role == 'admin' ? (
              <>
                <div className="opacity-0">kkk</div>
              </>
            ) : (
              <>
                <div className="text-[#636363] flex flex-row">
                  <div>
                    <BiUserPlus className="cursor-pointer hover:text-[#776bf0] text-2xl" />
                  </div>
                  <div className="mx-3">
                    <TbCircleCheck className="cursor-pointer hover:text-[#776bf0] text-2xl" />
                  </div>
                  <div>
                    <BiCalendar className="cursor-pointer hover:text-[#776bf0] text-2xl" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center py-3 mt-8 md:block md:pb-0 md:mt-0 hidden sm:hidden`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    {userData?.name ? (
                      userData?.name
                    ) : (
                      <Link to="/login">Login</Link>
                    )}
                    {userData?.name ? (
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      ''
                    )}
                  </Menu.Button>
                </div>

                {userData?.role == 'patient' ? (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/dashboard/user-profile"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/dashboard/my-bookings"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Bookings
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                              onClick={signOut}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                ) : userData?.role == 'doctor' ? (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/dashboard/business-dashboard"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Dashboard
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/dashboard/appointments"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Bookings
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                              onClick={signOut}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                ) : (
                  ''
                )}
              </Menu>
            </div>
            {/* <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Amir Sohail</a>
              </li>
              {/* <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Contact US</a>
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
