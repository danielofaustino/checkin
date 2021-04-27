import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img
            src="https://www.fabrinemacedo.com.br/img/logobranco.png"
            alt="logo"
            style={{ width: 120 }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">
                <NavLink>Bater Ponto</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/atestado">
                <NavLink>Atestado</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Comunicar Falta</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
