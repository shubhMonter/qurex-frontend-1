import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { emptyAuth } from "../../state/auth/Actions";
import getHelp from "../../assets/svgs/gethelp.svg";
import ellipse from "../../assets/svgs/ellipse.svg";
import callIcon from "../../assets/svgs/callicon.svg";
import { Role } from "../../state/interface";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navigation = () => {
  const auth = useSelector((state) => state.auth.authData);
  const navigate = useNavigate();
  const signOut = () => {
    emptyAuth();

    navigate("/");
  };
  return (
    <>
      <Navbar
        className="-mt-6"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="">
            <Link to="/">
              <img src="https://quer.vercel.app/static/media/mainlogo.56893844f2e5355be159f95257b797af.svg" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto col-lg-8 justify-content-around">
              <Nav.Link href="">
                <Link to="/treatment" className="no-underline">Sexual Issues - We Treat</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/#doctorsSection" className="no-underline">
                  Our Sexologists
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/discover" className="no-underline">Sexual Health Guide</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/discover" className="no-underline">Sex-ed (for kids)</Link>
              </Nav.Link>
            </Nav>
            <Nav className="col-lg-4 justify-content-around items-center">
              <Nav.Link href="#deets">
                {/*<span>
                   <img src="iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgBvVXBbtNAEJ0ZO4lrySUpjUQbpJ44oN4QcOTCD8AFiQOBUy" />
                </span>
                <button
                  type="button"
                  className="btn bg-light position-relative btn-sm"
                >
                  SHI
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">
                    <span className="visually-hidden">New</span>
                  </span>
                </button>*/}

                <img src={ellipse} />
              </Nav.Link>
              <Nav.Link href="">
                {/* <img src="https://quer.vercel.app/static/media/robosv.66b65f9b07ca6cb5cd17a903bd35ca53.svg" /> */}
                <img src={getHelp} />
              </Nav.Link>
              <Nav.Link href="">
                <img src={callIcon} />
              </Nav.Link>
              <Nav.Link>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                      {auth.isAuthenticated ? (
                        <>
                          {auth.user.name}{" "}
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </>
                      ) : (
                        <Link to="/login" className="no-underline">Login</Link>
                      )}
                    </Menu.Button>
                  </div>

                  {auth?.role == Role.PATIENT ? (
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
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
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
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
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
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
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
                  ) : auth?.role == Role.DR ? (
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
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
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
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
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
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
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
                  ) :auth.role == Role.ADMIN ?  (
                    (
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
                                to="/dashboard"
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
                    )
                  ):("")}
                </Menu>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
