import React from 'react';
import {Films, Navbar} from './components';
import Home from './screen/Home';
import SingleFilmPage from './screen/SingleFilmPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContentPolicy from "./screen/ContentPolicy";
import PrivatePolicy from "./screen/PrivatePolicy";
import About from "./screen/About";
import Search from "./screen/Search";
function App(props) {
  return (
    <Router>
      <div className="bg-gray-800">
        <header>
          <Navbar/>
        </header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/film/:id">
            <SingleFilmPage/>
          </Route>
          <Route exact path="/contentPolicy">
            <ContentPolicy/>
          </Route>
          <Route exact path="/privatePolicy">
            <PrivatePolicy/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;