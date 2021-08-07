import { Media } from 'reactstrap';

const MediaComponent = ({ img, name, description, designation }) => {
  return (
    <Media tag="li" className="d-flex" style={{ marginTop: '50px' }}>
      <Media left href="#">
        <Media object src={img} alt={name} />
      </Media>
      <Media body style={{ marginLeft: '50px' }}>
        <Media heading>{name}</Media>
        {designation && <p>{designation}</p>}
        <p>{description}</p>
      </Media>
    </Media>
  );
};

export default MediaComponent;
