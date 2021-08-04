import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
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
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
