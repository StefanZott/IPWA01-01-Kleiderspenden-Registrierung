import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="sticky-top w-100" style={{ backgroundColor: '#FF6F00' }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Hoffnungsfaden GmbH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
              <NavDropdown 
                title={<span style={{ color: 'white' }}>Kleiderspende</span>} 
                id="navbarScrollingDropdown"
                menuVariant="light"
              >
                <NavDropdown.Item href="/form">
                  Kleiderspende registrieren
                </NavDropdown.Item>
                <NavDropdown.Item href="/clothDonations">
                  Getätigte Kleiderspenden
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
