import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import styles from './Breadcrumb.module.css';

const BreadcrumbComponent = ({ link, title }) => {
  return (
    <div className={`row ${styles.rowStyle}`}>
      <Breadcrumb className={styles.breadCrumb}>
        <BreadcrumbItem>
          <Link to={`/${link.toLowerCase()}`}>{link}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{title}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>{title}</h3>
        <hr />
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
