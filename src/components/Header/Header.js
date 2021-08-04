import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <header>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Confusion</NavbarBrand>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
