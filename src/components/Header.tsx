import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top w-100">
        <Container fluid>
          <Navbar.Brand href="/">Hoffnungsfaden GmbH</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Kleiderspende" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/form">Kleiderspende registrieren</NavDropdown.Item>
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

export default Header