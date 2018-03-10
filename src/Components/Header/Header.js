import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = (props) => {
  const VRS_URL = 'http://www.virtualradarserver.co.uk/Documentation/Formats/AircraftList.aspx';
  const CLEARBIT_URL = 'https://clearbit.com/logo';

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Air Traffic</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li role="presentation" eventKey={1} className="nav-item">
            <Link to="/" href="/">Home</Link>
          </li>
          <NavDropdown eventKey={2} title="APIs used" id="basic-nav-dropdown">
            <MenuItem eventKey={2.1} href={VRS_URL}>
              Virtual Radar Server
            </MenuItem>
            <MenuItem eventKey={2.2} href={CLEARBIT_URL}>
              Clearbit
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
