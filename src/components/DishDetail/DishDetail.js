/* eslint-disable operator-linebreak */
import { fas, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardImgOverlay,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import CommentForm from 'components/common/CommentForm';
import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import { addComment } from 'redux/reducers/dishes';
import { addFavorite } from 'redux/reducers/favorites';
import { library } from '@fortawesome/fontawesome-svg-core';

const DishDetail = ({ dishes }) => {
  const [modal, setModal] = useState(false);
  const { favorites } = useSelector((state) => state);
  const dispatch = useDispatch();
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

  const postComment = (comment) => {
    dispatch(addComment(comment, dish._id));
    toggleModal();
  };

  const postFavorite = () => {
    dispatch(addFavorite(dish._id));
  };

  const isFavorite = favorites.dishes.some((item) => item._id === dish._id);

  return (
    <div className="container pb-5">
      <BreadcrumbComponent link="Menu" title={dish && dish.name} />
      <div className="row pt-5 ">
        <div className="col-12 col-md-5 m-1">
          {dish && (
            <Card>
              <CardImg width="100%" src={`/${dish.image}`} alt={dish.name} />
              <CardImgOverlay>
                <Button outline color="primary" onClick={postFavorite}>
                  <FontAwesomeIcon
                    icon={isFavorite ? ['fas', 'heart'] : ['far', 'heart']}
                  />
                </Button>
              </CardImgOverlay>
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          )}
        </div>
        <div className="col-12 col-md-5 m-1">
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
              <CommentForm fetchComment={postComment} />
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

library.add(fas, far);

export default DishDetail;
