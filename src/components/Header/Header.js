import { useState } from 'react';
import {
  Button,
  Collapse,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
  faHome,
  faInfo,
  faList,
  faAddressCard,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header>
      <Navbar className={styles.navbar} dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggle} />
          <NavbarBrand href="/">
            <img
              className={styles.logo}
              src="images/logo.png"
              alt="Confusion"
            />
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
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
          </Collapse>
          <Nav className="ml-auto d-md-none" navbar>
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
      <Jumbotron className={styles.jumbotron}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={styles.title}>Restorante Con Fusion</h1>
              <p className={styles.desc}>
                We take inspiration from the World&apos;s best cuisines, and
                create a unique fusion experience. Our lipsmacking creations
                will tickle your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </header>
  );
};

export default Header;
