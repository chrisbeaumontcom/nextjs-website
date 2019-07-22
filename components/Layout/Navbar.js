import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container-fluid navcontainer">
        <div className="container">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/gallery">Selected Paintings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/cv">Curriculum Vitae</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <style scoped jsx>{`
          .navcontainer {
            background-color: #343a40;
          }
        `}</style>
      </div>
    );
  }
}
