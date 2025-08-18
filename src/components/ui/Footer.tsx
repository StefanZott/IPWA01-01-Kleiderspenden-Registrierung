import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SafeLink from "../SafeLinks";

function Footer() {
  return (
    <>
      <Navbar expand="lg" className="sticky-bottom w-100 d-none d-lg-flex" style={{ backgroundColor: '#FF6F00' }}>
        <Container className="d-flex justify-content-center py-2">
          <Nav className="d-flex gap-4">
            <Nav.Link as={SafeLink} to="/impressum" style={{ color: 'white', fontWeight: '500' }}>Impressum</Nav.Link>
          <Nav.Link as={SafeLink} to="/privacy" style={{ color: 'white', fontWeight: '500' }}>Datenschutz</Nav.Link>
          <Nav.Link as={SafeLink} to="/agb" style={{ color: 'white', fontWeight: '500' }}>AGB</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer;
