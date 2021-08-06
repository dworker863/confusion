import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDishes } from 'redux/reducers/dishes';
import { getPromotions } from 'redux/reducers/promotions';
import { getLeaders } from 'redux/reducers/leaders';

import CardComponent from 'components/common/Card';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
    dispatch(getPromotions());
    dispatch(getLeaders());
  }, [dispatch]);

  const { dishes, promotions, leaders } = useSelector((state) => state);
  const [dishForRender] = dishes.filter((dish) => dish.featured);
  const [promoForRender] = promotions.filter((promo) => promo.featured);
  const [leaderForRender] = leaders.filter((leader) => leader.featured);

  return (
    <div className="container pt-1 pb-1">
      <div className="row">
        <div className="col-4 d-flex align-items-stretch">
          {dishForRender && (
            <CardComponent
              img={dishForRender.image}
              name={dishForRender.name}
              description={dishForRender.description}
            />
          )}
        </div>
        <div className="col-4 d-flex align-items-stretch">
          {promoForRender && (
            <CardComponent
              img={promoForRender.image}
              name={promoForRender.name}
              description={promoForRender.description}
            />
          )}
        </div>
        <div className="col-4 d-flex align-items-stretch">
          {leaderForRender && (
            <CardComponent
              img={leaderForRender.image}
              name={leaderForRender.name}
              description={leaderForRender.description}
              designation={leaderForRender.designation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
