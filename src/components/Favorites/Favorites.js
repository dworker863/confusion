/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { deleteFavorite, getFavorites } from 'redux/reducers/favorites';

import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import MediaComponent from 'components/common/Media';
import Loader from 'components/common/Loader';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const removeFavorite = (dishId) => {
    dispatch(deleteFavorite(dishId));
  };

  return (
    <div className="container pb-5">
      <BreadcrumbComponent link="Home" title="My Favorites" />

      {favorites.errorMessage ? (
        <p>{favorites.errorMessage}</p>
      ) : favorites.isFetching ? (
        <Loader />
      ) : favorites.dishes.length ? (
        favorites.dishes.map((dish) => (
          <>
            <MediaComponent
              key={dish._id}
              img={dish.image}
              name={dish.name}
              description={dish.description}
              buttonHandler={() => removeFavorite(dish._id)}
              button
            />
          </>
        ))
      ) : null}
    </div>
  );
};

export default Favorites;
