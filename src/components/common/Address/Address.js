import { faEnvelope, faFax, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Address.module.css';

const Adress = () => {
  return (
    <div>
      <h5>Our Address</h5>
      <address>
        121, Clear Water Bay Road
        <br />
        Clear Water Bay, Kowloon
        <br />
        HONG KONG
        <br />
        <FontAwesomeIcon icon={faPhone} /> +852 1234 5678
        <br />
        <FontAwesomeIcon icon={faFax} /> +852 8765 4321
        <br />
        <FontAwesomeIcon icon={faEnvelope} />{' '}
        <a href="mailto:confusion@food.net">confusion@food.net</a>
        <br />
      </address>
    </div>
  );
};

export default Adress;
