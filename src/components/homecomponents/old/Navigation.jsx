import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://quer.vercel.app/static/media/mainlogo.56893844f2e5355be159f95257b797af.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto col-lg-8 justify-content-around">
              <Nav.Link href="#features">Sexual Issues We Treat</Nav.Link>
              <Nav.Link href="#pricing">Our Sexologists</Nav.Link>
              <Nav.Link href="#pricing">Sexual Health Guide</Nav.Link>
              <Nav.Link href="#pricing">Sex-ed (for kids)</Nav.Link>
            </Nav>
            <Nav className="col-lg-4 justify-content-around">
              <Nav.Link href="#deets">
                <span>
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
                </button>
              </Nav.Link>
              <Nav.Link href="">
                <img src="https://quer.vercel.app/static/media/robosv.66b65f9b07ca6cb5cd17a903bd35ca53.svg" />
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
