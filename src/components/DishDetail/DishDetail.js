/* eslint-disable operator-linebreak */
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

import CommentForm from 'components/common/CommentForm';
import CardComponent from 'components/common/Card';
import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';

const DishDetail = ({ dishes }) => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [dish] = dishes.filter((item) => item._id === id);

  const toggleModal = () => setModal(!modal);

  const closeBtn = (
    <button
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={toggleModal}
    />
  );

  return (
    <div className="container pb-5">
      <BreadcrumbComponent link="Menu" title={dish && dish.name} />
      <div className="row pt-5 ">
        <div className="col-6">
          {dish && (
            <CardComponent
              size="100%"
              img={dish.image}
              name={dish.name}
              description={dish.description}
            />
          )}
        </div>
        <div className="col-6">
          {dish &&
            dish.comments &&
            dish.comments.map((comment) => (
              <div key={comment._id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author.username},{' '}
                  {new Date(comment.createdAt).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    timeZone: 'UTC',
                  })}
                </p>
              </div>
            ))}
          <Button outline onClick={toggleModal}>
            <FontAwesomeIcon icon={faPencilAlt} /> Submit Comment
          </Button>
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal} close={closeBtn}>
              Submit Comment
            </ModalHeader>
            <ModalBody>
              <CommentForm />
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
