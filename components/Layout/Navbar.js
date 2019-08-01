import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid navcontainer">
        <Container>
          <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
            <Nav>
              <Navbar.Brand href="/">Home</Navbar.Brand>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <NavDropdown title="Gallery" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/gallery/selected-paintings">
                    Selected Paintings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/gallery/still-life-with-variations">
                    Variations 2017
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/cv">Curriculum Vitae</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <style scoped jsx>{`
          .navcontainer {
            background-color: #343a40;
          }
        `}</style>
      </div>
    );
  }
}
