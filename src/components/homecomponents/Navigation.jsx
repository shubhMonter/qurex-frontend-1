import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import hbVector from '../../assets/svgs/hbVector.svg';
// import querxLogo from '../../assets/svgs/querxLogo.svg';
import robot from '../../assets/svgs/robot.svg';
import navBadge from '../../assets/svgs/newBadge.svg';
import getHelp from '../../assets/svgs/gethelp.svg';
import ellipse from '../../assets/svgs/ellipse.svg';
import callIcon from '../../assets/svgs/callicon.svg';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">{/* <img src={querxLogo} /> */}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" color="blue">
            <Nav className="me-auto col-lg-8 justify-content-around">
              <Nav.Link href="#features">Sexual Issues We Treat</Nav.Link>
              <Nav.Link href="#pricing">Our Sexologists</Nav.Link>
              <Nav.Link href="#pricing">Sexual Health Guide</Nav.Link>
              <Nav.Link href="#pricing">Sex-ed (for kids)</Nav.Link>
            </Nav>
            <Nav className="col-lg-4 justify-content-around">
              <Nav.Link href="#deets" className="d-flex">
                {/* <img src={hbVector} style={{height:"fit-content"}} className="mt-2" /> */}
                {/* <button
                  type="button"
                  className="btn bg-light position-relative btn-sm"
                >
                  SHI
                  <img
                    className="position-absolute top-1 start-100 translate-middle"
                    src={navBadge}
                  />
                </button> */}
                <img src={ellipse} />
              </Nav.Link>
              <Nav.Link>
                <img src={getHelp} />
              </Nav.Link>
              <Nav.Link>
                <img src={callIcon} />
              </Nav.Link>
              <Nav.Link>
                <Link to="/login">
                  <Button variant="outline-primary rounded-pill px-3">
                    Login
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
