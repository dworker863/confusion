/* eslint-disable operator-linebreak */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getFavorites } from 'redux/reducers/favorites';

import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import MediaComponent from 'components/common/Media';

const Favorites = () => {
  const { favorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

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
              button
            />
          </>
        ))}
    </div>
  );
};

export default Favorites;
