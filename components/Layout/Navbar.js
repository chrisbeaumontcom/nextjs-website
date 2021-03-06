import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import sConfig from '../../config';

const galleries = sConfig.galleries;

export default function NavBar() {
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
              {galleries.map((el, index) => (
                <Nav.Item key={index}>
                  <Link href={{ pathname: '/gallery', query: { id: el.slug } }} as={`/gallery/${el.slug}`}>
                    <a>{el.name}</a>
                  </Link>
                </Nav.Item>
              ))}

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
    </div>
  );
}
