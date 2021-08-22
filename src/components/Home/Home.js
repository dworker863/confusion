/* eslint-disable no-nested-ternary */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import CardComponent from 'components/common/Card';
import Loader from 'components/common/Loader';

import { getDishes } from 'redux/reducers/dishes';
import { getPromotions } from 'redux/reducers/promotions';
import { getLeaders } from 'redux/reducers/leaders';

const Home = () => {
  const dishes = useSelector((state) => state.dishes);
  const leaders = useSelector((state) => state.leaders);
  const promotions = useSelector((state) => state.promotions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
    dispatch(getPromotions());
    dispatch(getLeaders());
  }, [dispatch]);

  const [dishForRender] = dishes.items.filter((dish) => dish.featured);
  const [promoForRender] = promotions.items.filter((promo) => promo.featured);
  const [leaderForRender] = leaders.items.filter((leader) => leader.featured);

  return (
    <div className="container pt-1 pb-1">
      <div className="row">
        <div className="col-12 col-lg-4 d-flex align-items-stretch">
          {dishes.isFetching ? (
            <Loader />
          ) : dishForRender ? (
            <CardComponent
              size="100%"
              img={dishForRender.image}
              name={dishForRender.name}
              description={dishForRender.description}
            />
          ) : null}
        </div>
        <div className="col-12 col-lg-4 d-flex align-items-stretch">
          {promotions.isFetching ? (
            <Loader />
          ) : promoForRender ? (
            <CardComponent
              size="100%"
              img={promoForRender.image}
              name={promoForRender.name}
              description={promoForRender.description}
            />
          ) : null}
        </div>
        <div className="col-12 col-lg-4 d-flex align-items-stretch">
          {leaders.isFetching ? (
            <Loader />
          ) : leaderForRender ? (
            <CardComponent
              size="100%"
              img={leaderForRender.image}
              name={leaderForRender.name}
              description={leaderForRender.description}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
