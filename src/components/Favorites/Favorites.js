/* eslint-disable operator-linebreak */
import { getFavorites } from 'redux/reducers/favorites';

import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Favorites = () => {
  const { favorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <div className="container">
      <BreadcrumbComponent link="Home" title="My Favorites" />
      {favorites &&
        favorites.dishes &&
        favorites.dishes.map((favorite) => (
          <p key={favorite._id}>{favorite.name}</p>
        ))}
    </div>
  );
};

export default Favorites;
