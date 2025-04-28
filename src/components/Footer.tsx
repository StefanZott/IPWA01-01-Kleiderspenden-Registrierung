import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar expand="lg" className="sticky-bottom w-100" style={{ backgroundColor: '#FF6F00' }}>
        <Container className="d-flex justify-content-center py-2">
          <Nav className="d-flex gap-4">
            <Nav.Link href="/impressum" style={{ color: 'white', fontWeight: '500' }}>Impressum</Nav.Link>
            <Nav.Link href="/privacy" style={{ color: 'white', fontWeight: '500' }}>Datenschutz</Nav.Link>
            <Nav.Link href="/agb" style={{ color: 'white', fontWeight: '500' }}>AGB</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer;
