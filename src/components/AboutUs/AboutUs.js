import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, Media } from 'reactstrap';

import MediaComponent from 'components/common/Media';

import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const { leaders } = useSelector((state) => state);

  return (
    <div className="container">
      <BreadcrumbComponent link="Home" title="About Us" />
      <main className={styles.content}>
        <div className="row">
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-5">
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
          <div className="col-12">
            <Card>
              <CardBody>
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      You better cut the pizza in four pieces because I&apos;m
                      not hungry enough to eat six.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Yogi Berra,
                    <cite title="Source Title">
                      The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion
                      Books, 2014
                    </cite>
                  </figcaption>
                </figure>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
      <div className={styles.content}>
        <h2>Corporate Leadership</h2>
        <Media tag="list">
          {leaders.items.map((leader) => (
            <MediaComponent
              key={leader.id}
              img={leader.image}
              name={leader.name}
              designation={leader.designation}
              description={leader.description}
            />
          ))}
        </Media>
      </div>
    </div>
  );
};

export default AboutUs;
