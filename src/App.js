// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Main.scss';
import Eat from '../src/components/Eat/Eat';
import Shop from '../src/components/Shop/Shop';
import About from '../src/components/About/About';
import Article from '../src/components/Article/Article';
import Inspiration from '../src/components/Inspiration/Inspiration'
import LandingPage from '../src/components/Landingpage/Landingpage'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/eat" component={Eat} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/article" component={Article} />
          <Route path="/inspiration" component={Inspiration} />
          <Route path="*" component={LandingPage} />
          <Route path="/" exact component={LandingPage} />
          <LandingPage/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
