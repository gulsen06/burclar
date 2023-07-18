import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import resim from "../../logo.png";
import "./MyNavbar.scss";
const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="transparan-background  mb-3" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={resim}
            style={{ width: "100px", height: "auto" }}
            alt="burc"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 m pe-3  ">
              <Nav.Link className="link" href="#action1">
                HOROSCOPE
              </Nav.Link>
              <Nav.Link className="link" href="#action2">
                DAILY
              </Nav.Link>
              <Nav.Link className="link" href="#action2">
                TATORT
              </Nav.Link>
              <Nav.Link className="link" href="#action2">
                ARTICLE
              </Nav.Link>
              <Nav.Link className="link" href="#action2">
                CONTACT
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
