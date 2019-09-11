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
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Nav.Item>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Item>
                  <Link href="/gallery/selected-paintings">
                    <a>Selected Paintings</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/gallery/still-life-with-variations">
                    <a>Variations 2017</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/cv">
                    <a>Curriculum Vitae</a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
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
