import { useDispatch, useSelector } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import { dropAuth, getAuth } from 'redux/reducers/auth';

import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';
import DishDetail from 'components/DishDetail/DishDetail';
import Favorites from 'components/Favorites/Favorites';

const App = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const login = (username, password) => {
    return dispatch(getAuth(username, password));
  };

  const logout = () => {
    dispatch(dropAuth());
  };

  return (
    <div>
      <Header login={login} logout={logout} auth={auth} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/menu/:id" component={DishDetail} />
        {auth.auth && <Route path="/favorites" component={Favorites} />}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
