import {Container, Nav, Navbar} from "react-bootstrap";

function Navegation() {
  return (
    <Navbar className='bg-body-tertiary' expand="lg">
      <Container>
        <Navbar.Brand>
          TIENDA DE PRODUCTOS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productos">Products</Nav.Link>
            <Nav.Link href="/crear-producto">Create Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegation;