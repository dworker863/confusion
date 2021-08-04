import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contacts">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
