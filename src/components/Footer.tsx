import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Impressum from "../pages/Impressum"

function Footer() {
  return (
    <>
      {/* <nav className="navbar sticky-bottom bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sticky bottom</a>
        </div>
      </nav> */}
      <Navbar expand="lg" className="bg-body-tertiary sticky-bottom w-100">
        <Container className="d-flex justify-content-around w-50" fluid>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/impressum">Impressum</Nav.Link>
          <Nav.Link href="/privacy">Datenschutz</Nav.Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer