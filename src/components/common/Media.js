import { Media, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MediaComponent = ({
  key,
  img,
  name,
  description,
  designation,
  buttonHandler,
  button,
}) => {
  return (
    <Media key={key} tag="li" className="d-flex" style={{ marginTop: '50px' }}>
      <Media left href="#">
        <Media object src={`/${img}`} alt={name} />
      </Media>
      <Media body style={{ marginLeft: '50px' }}>
        <Media heading>{name}</Media>
        {designation && <p>{designation}</p>}
        <p>{description}</p>
        {button && (
          <Button outline color="danger" onClick={buttonHandler}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        )}
      </Media>
    </Media>
  );
};

export default MediaComponent;
