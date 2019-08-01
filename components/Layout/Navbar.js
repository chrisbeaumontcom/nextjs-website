import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown
} from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleDrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
                <UncontrolledDropdown
                  inNavbar
                  nav
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleDrop}
                >
                  <DropdownToggle nav caret>
                    Gallery
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a" href="/gallery/selected-paintings">
                      Selected Paintings
                    </DropdownItem>
                    <DropdownItem
                      tag="a"
                      href="/gallery/still-life-with-variations"
                    >
                      Variations 2017
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
