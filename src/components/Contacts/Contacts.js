import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

import Adress from 'components/common/Address/Address';
import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';

import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className="container pb-5">
      <BreadcrumbComponent title="Contact Us" />
      <div className="row mt-5 mb-5">
        <div className="col-12 mb-4">
          <h3>Location Information</h3>
        </div>
        <div className="col-5 offset-1">
          <Adress />
        </div>
        <div className="col-5">
          <h5>Map of our Location</h5>
        </div>
      </div>
      <hr />
      <h3 className={styles.formTitle}>Send us your feedback</h3>
      <Form>
        <FormGroup row>
          <Label md={1}>First Name</Label>
          <Col md={6}>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={1}>Last Name</Label>
          <Col md={6}>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={1}>Email</Label>
          <Col md={6}>
            <Input type="email" name="email" id="email" placeholder="Email " />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 2, offset: 1 }}>
            <Input type="checkbox" name="agree" id="agree" />
            <strong> May we contact you?</strong>
          </Col>
          <Col md={{ size: 3, offset: 1 }}>
            <Input type="select" name="contactType" id="contactType">
              <option>Tel.</option>
              <option>Email</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={1}>Contact Tel.</Label>
          <Col md={6}>
            <Input
              type="text"
              name="telNum"
              id="telNum"
              placeholder="Tel. Number"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={1}>Your Feedback</Label>
          <Col md={6}>
            <Input
              type="textarea"
              name="lastName"
              id="lastName"
              placeholder="Message"
              rows="12"
            />
          </Col>
        </FormGroup>
        <Col md={{ offset: 1 }}>
          <Button color="primary">Send Feedback</Button>
        </Col>
      </Form>
    </div>
  );
};

export default Contacts;
