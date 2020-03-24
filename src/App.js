import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:imdbID" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
