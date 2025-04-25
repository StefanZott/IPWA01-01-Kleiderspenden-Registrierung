import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
          <Nav.Link href="/impressum">Impressum</Nav.Link>
          <Nav.Link href="/privacy">Datenschutz</Nav.Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer