import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

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
              <Nav.Item>
                <Link href="/">Home</Link>
              </Nav.Item>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Item>
                  <Link href="/gallery/selected-paintings">Selected Paintings</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/gallery/still-life-with-variations">Variations 2017</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/cv">Curriculum Vitae</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/contact">Contact</Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <style scoped>{`
          .navcontainer {
            background-color: #343a40;
          }
          .nav-item {
            padding:4px 10px;
          }
          .nav-item a {
            color: #aaaaaa;
          }
          .nav-item a:hover {
            text-decoration:none;
            color: #eeeeee;
          }
        `}</style>
      </div>
    );
  }
}
