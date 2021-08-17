import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faSpinner}
        size="5x"
        className="fa-pulse text-primary"
      />
      <p>Loading . . .</p>
    </div>
  );
};

export default Loader;
