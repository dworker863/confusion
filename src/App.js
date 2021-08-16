import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import { getDishes } from 'redux/reducers/dishes';
import { getPromotions } from 'redux/reducers/promotions';
import { getLeaders } from 'redux/reducers/leaders';
import { dropAuth, getAuth } from 'redux/reducers/auth';

import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';
import DishDetail from 'components/DishDetail/DishDetail';

const App = () => {
  const { dishes, promotions, leaders, auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
    dispatch(getPromotions());
    dispatch(getLeaders());
  }, [dispatch]);

  const login = (username, password) => {
    dispatch(getAuth(username, password));
  };

  const logout = () => {
    dispatch(dropAuth());
  };

  const username = auth.username;

  return (
    <div>
      <Header login={login} logout={logout} username={username} />
      <Switch>
        <Route
          path="/home"
          render={() => (
            <Home dishes={dishes} promotions={promotions} leaders={leaders} />
          )}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/menu/:id" render={() => <DishDetail dishes={dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
