import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SafeLink from "../SafeLinks";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="sticky-top w-100" style={{ backgroundColor: '#FF6F00' }}>
        <Container fluid>
          <Navbar.Brand as={SafeLink} to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Hoffnungsfaden GmbH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link as={SafeLink} to="/" style={{ color: 'white' }}>Home</Nav.Link>
              <NavDropdown 
                title={<span style={{ color: 'white' }}>Kleiderspende</span>} 
                id="navbarScrollingDropdown"
                menuVariant="light"
              >
                <NavDropdown.Item as={SafeLink} to="/form">
                  Kleiderspende registrieren
                </NavDropdown.Item>
                <NavDropdown.Item as={SafeLink} to="/clothDonations">
                  Getätigte Kleiderspenden
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={SafeLink} to="/impressum" style={{ color: 'white', fontWeight: '500' }}>Impressum</Nav.Link>
              <Nav.Link as={SafeLink} to="/privacy" style={{ color: 'white', fontWeight: '500' }}>Datenschutz</Nav.Link>
              <Nav.Link as={SafeLink} to="/agb" style={{ color: 'white', fontWeight: '500' }}>AGB</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
