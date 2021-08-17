import { useState } from 'react';
import * as Yup from 'yup';
import {
  Button,
  Collapse,
  Jumbotron,
  Modal,
  ModalBody,
  ModalHeader,
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
import { ErrorMessage, Field, Form, Formik } from 'formik';

import styles from './Header.module.css';

const Header = ({ login, logout, username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeBtn = (
    <button
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={toggleModal}
    />
  );

  return (
    <header>
      <Navbar className={styles.navbar} dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggle} />
          <NavbarBrand href="/">
            <img
              className={styles.logo}
              src="/images/logo.png"
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
          <Nav className="ml-auto" navbar>
            <NavItem>
              {username && (
                <span className={styles.userInfo}>Welcome, {username}! </span>
              )}
              {username ? (
                <Button
                  outline
                  color="secondary"
                  className="ml-auto"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignInAlt} size="md" /> Logout
                </Button>
              ) : (
                <Button
                  outline
                  color="secondary"
                  className="ml-auto"
                  onClick={toggleModal}
                >
                  <FontAwesomeIcon icon={faSignInAlt} size="md" /> Login
                </Button>
              )}
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
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal} close={closeBtn}>
          Login
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              username: '',
              password: '',
              remember: false,
            }}
            validationSchema={Yup.object({
              username: Yup.string().required('Required'),
              password: Yup.string()
                .min(4, 'Password must be more than 3 characters')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              login(values.username, values.password);
              setSubmitting(false);
              toggleModal();
            }}
          >
            <Form>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username">
                {(msg) => <div className="errorMsg">{msg}</div>}
              </ErrorMessage>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password">
                {(msg) => <div className="errorMsg">{msg}</div>}
              </ErrorMessage>
              <div className="row">
                <div className="col-12">
                  <Field
                    type="checkbox"
                    name="remember"
                    className={styles.remember}
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
              <Button type="submit" color="primary">
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </header>
  );
};

export default Header;
