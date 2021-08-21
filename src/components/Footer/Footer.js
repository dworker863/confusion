import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import Adress from 'components/common/Address/Address';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <Adress />
          </div>
          <div className="col-12 col-sm-3 offset-sm-1">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              © Copyright 2021 Ristorante Con Fusion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

library.add(fab);

export default Footer;
