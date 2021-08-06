import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDishes } from 'redux/reducers/dishes';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const { dishes } = useSelector((state) => state);
  const [dishForRender] = dishes.filter((dish) => dish.featured);

  return <div>{dishForRender && dishForRender.name}</div>;
};

export default Home;
