import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDishes } from 'redux/reducers/dishes';

import CardComponent from 'components/common/Card';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const { dishes } = useSelector((state) => state);
  const [dishForRender] = dishes.filter((dish) => dish.featured);

  return (
    <div className="container pt-1 pb-1">
      <div className="row">
        <div className="col-4">
          {dishForRender && (
            <CardComponent
              img={dishForRender.image}
              name={dishForRender.name}
              description={dishForRender.description}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
