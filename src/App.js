import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import { getDishes } from 'redux/reducers/dishes';
import { getPromotions } from 'redux/reducers/promotions';
import { getLeaders } from 'redux/reducers/leaders';

import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
    dispatch(getPromotions());
    dispatch(getLeaders());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/menu" component={Menu} />
        <Route path="/contacts" component={Contacts} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
