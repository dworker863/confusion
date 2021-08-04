import { Button, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
  faHome,
  faInfo,
  faList,
  faAddressCard,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from 'assets/images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Navbar className={styles.navbar} dark expand="md">
        <div className="container">
          <Nav className="mr-auto" navbar>
            <NavbarBrand href="/">
              <img className={styles.logo} src={logo} alt="Confusion" />
            </NavbarBrand>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <FontAwesomeIcon icon={faHome} size="md" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                <FontAwesomeIcon icon={faInfo} size="md" /> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                <FontAwesomeIcon icon={faList} size="md" /> Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contacts">
                <FontAwesomeIcon icon={faAddressCard} size="md" /> Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/login">
                <Button outline color="secondary" className="ml-auto">
                  <FontAwesomeIcon icon={faSignInAlt} size="md" /> Login
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
