import { Link } from 'react-router-dom';
import {
  BreadcrumbItem,
  Breadcrumb,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className="container">
      <div className={`row ${styles.rowStyle}`}>
        <Breadcrumb className={styles.breadCrumb}>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <main className={styles.content}>
        <div className="row">
          <div className="col-6">
            <h2>Our History</h2>
            <p>
              Started in 2010, Ristorante con Fusion quickly established itself
              as a culinary icon par excellence in Hong Kong. With its unique
              brand of world fusion cuisine that can be found nowhere else, it
              enjoys patronage from the A-list clientele in Hong Kong. Featuring
              four of the best three-star Michelin chefs in the world, you never
              know what will arrive on your plate the next time you visit us.
            </p>
            <p>
              The restaurant traces its humble beginnings to The Frying Pan, a
              successful chain started by our CEO, Mr. Peter Pan, that featured
              for the first time the world&apos;s best cuisines in a pan.
            </p>
          </div>
          <div className="col-4">
            <Card>
              <CardHeader className="bg-primary text-white">
                Facts At a Glance
              </CardHeader>
              <CardBody>
                <dl className="row p-1">
                  <dt className="col-6">Started</dt>
                  <dd className="col-6">3 Feb. 2013</dd>
                  <dt className="col-6">Major Stake Holder</dt>
                  <dd className="col-6">HK Fine Foods Inc.</dd>
                  <dt className="col-6">Last Year&apos;s Turnover</dt>
                  <dd className="col-6">$1,250,375</dd>
                  <dt className="col-6">Employees</dt>
                  <dd className="col-6">40</dd>
                </dl>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
