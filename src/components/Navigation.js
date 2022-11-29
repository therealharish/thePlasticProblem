import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'


function BasicExample() {
  return (
    <Navbar className = "color-nav" variant = "dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Plastic Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className = "navText">Home</Nav.Link>
            <Nav.Link href="/more">Learn More</Nav.Link>
            <Nav.Link href="/action">Action</Nav.Link>
            <Nav.Link href="/challenge">Challenge</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;