/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import { getDishes } from 'redux/reducers/dishes';

import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import Loader from 'components/common/Loader';

import styles from './Menu.module.css';

const Menu = () => {
  const dishes = useSelector((state) => state.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  return (
    <div className="container">
      <BreadcrumbComponent link="Home" title="Menu" />
      <div className="row">
        {dishes.isFetching ? (
          <Loader />
        ) : dishes.items.length ? (
          dishes.items.map((dish) => (
            <div key={dish._id} className="col-12 col-md-5">
              <Card className="m-1 fw-normal">
                <NavLink to={`/menu/${dish._id}`} className={styles.link}>
                  <CardImg src={dish.image} alt={dish.image} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </NavLink>
              </Card>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
