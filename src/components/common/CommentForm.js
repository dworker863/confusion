import { Button } from 'reactstrap';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const CommentForm = ({ fetchComment }) => {
  return (
    <div>
      <Formik
        initialValues={{
          rating: 1,
          comment: '',
        }}
        validationSchema={Yup.object({
          rating: Yup.number().required('Required'),
          comment: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetchComment(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="rating">Rating</label>
          <Field name="rating" as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Field>
          <ErrorMessage name="rating">
            {(msg) => <div className="errorMsg">{msg}</div>}
          </ErrorMessage>
          <label htmlFor="comment">Comment</label>
          <Field name="comment" as="textarea" rows="6" />
          <ErrorMessage name="comment">
            {(msg) => <div className="errorMsg">{msg}</div>}
          </ErrorMessage>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CommentForm;
