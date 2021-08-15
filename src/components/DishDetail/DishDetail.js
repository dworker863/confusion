/* eslint-disable operator-linebreak */
import CardComponent from 'components/common/Card';
import { useParams } from 'react-router-dom';

const DishDetail = ({ dishes }) => {
  const { id } = useParams();
  const [dish] = dishes.filter((item) => item._id === id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {dish && (
            <CardComponent
              size="100%"
              img={`images/${dish.name.toLowerCase()}.png`}
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
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
