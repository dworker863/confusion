import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';

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
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          tel: '',
          email: '',
          agree: false,
          contactType: 'Tel.',
          feedback: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          tel: Yup.number().min(10, 'Please enter a valid phone number'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values) => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, 2, null));
        }}
      >
        <Form>
          <div className="row">
            <div className="col-2">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col-6">
              <Field name="firstName" type="text" placeholder="First Name" />
            </div>
            <ErrorMessage name="firstName" />
          </div>

          <div className="row">
            <div className="col-2">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="col-6">
              <Field name="lastName" type="text" placeholder="Last Name" />
            </div>
            <ErrorMessage name="lastName" />
          </div>

          <div className="row">
            <div className="col-2">
              <label htmlFor="tel">Contact Tel.</label>
            </div>
            <div className="col-6">
              <Field name="tel" type="text" placeholder="7 123 456 78 90" />
            </div>
            <ErrorMessage name="tel" />
          </div>

          <div className="row">
            <div className="col-2">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-6">
              <Field name="email" type="email" placeholder="Email" />
            </div>
            <ErrorMessage name="email" />
          </div>

          <div className="row justify-content-start">
            <div className="col-3 offset-2">
              <Field name="agree" type="checkbox" className={styles.agree} />
              <label htmlFor="lastName">
                <strong>May we contact you?</strong>
              </label>
            </div>
            <div className="col-3">
              <Field name="lastName" as="select">
                <option>Tel.</option>
                <option>Email</option>
              </Field>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <label htmlFor="feedback">Your Feedback</label>
            </div>
            <div className="col-6">
              <Field
                name="feedback"
                as="textarea"
                rows={12}
                placeholder="Message"
              />
            </div>
            <ErrorMessage name="feedback" />
          </div>

          <div className="row">
            <div className="col-3 offset-2">
              <Button type="submit" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Contacts;
