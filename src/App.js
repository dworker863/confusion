import { Switch, Route } from 'react-router-dom';

import AboutUs from 'components/AboutUs/AboutUs';
import Contacts from 'components/Contacts/Contacts';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Menu from 'components/Menu/Menu';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
