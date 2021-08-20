/* eslint-disable operator-linebreak */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { deleteFavorite, getFavorites } from 'redux/reducers/favorites';

import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import MediaComponent from 'components/common/Media';

const Favorites = () => {
  const { favorites } = useSelector((state) => state);
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

      {favorites &&
        favorites.dishes &&
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
        ))}
    </div>
  );
};

export default Favorites;
